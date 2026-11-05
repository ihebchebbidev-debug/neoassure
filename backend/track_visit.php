<?php
// Records a page view. Upserts the visitor (one row per unique IP) and
// inserts a page-view row. Geo lookup only runs the first time an IP is seen.
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['success' => false, 'error' => 'Method not allowed'], 405);
}

$body = getRequestBody();

// --- Resolve the real client IP (honour common proxy headers) ---
function clientIp() {
    $keys = ['HTTP_CF_CONNECTING_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_REAL_IP', 'REMOTE_ADDR'];
    foreach ($keys as $k) {
        if (!empty($_SERVER[$k])) {
            $ip = trim(explode(',', $_SERVER[$k])[0]);
            if (filter_var($ip, FILTER_VALIDATE_IP)) return $ip;
        }
    }
    return $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
}

// --- Minimal user-agent parser (device / browser / os) ---
function parseUa($ua) {
    $ua = $ua ?: '';
    $device = 'Desktop';
    if (preg_match('/iPad|Tablet|PlayBook|Silk/i', $ua)) $device = 'Tablet';
    elseif (preg_match('/Mobi|Android.*Mobile|iPhone|iPod|Windows Phone/i', $ua)) $device = 'Mobile';

    $browser = 'Unknown';
    if (preg_match('/Edg/i', $ua)) $browser = 'Edge';
    elseif (preg_match('/OPR|Opera/i', $ua)) $browser = 'Opera';
    elseif (preg_match('/Chrome/i', $ua)) $browser = 'Chrome';
    elseif (preg_match('/Firefox/i', $ua)) $browser = 'Firefox';
    elseif (preg_match('/Safari/i', $ua)) $browser = 'Safari';
    elseif (preg_match('/MSIE|Trident/i', $ua)) $browser = 'Internet Explorer';

    $os = 'Unknown';
    if (preg_match('/Windows NT 10/i', $ua)) $os = 'Windows 10/11';
    elseif (preg_match('/Windows/i', $ua)) $os = 'Windows';
    elseif (preg_match('/Android/i', $ua)) $os = 'Android';
    elseif (preg_match('/iPhone|iPad|iPod/i', $ua)) $os = 'iOS';
    elseif (preg_match('/Mac OS X/i', $ua)) $os = 'macOS';
    elseif (preg_match('/Linux/i', $ua)) $os = 'Linux';

    return [$device, $browser, $os];
}

// --- Geo lookup via ip-api.com (server-side, only for new IPs) ---
function geoLookup($ip) {
    $empty = [
        'country' => null, 'countryCode' => null, 'region' => null,
        'regionName' => null, 'city' => null, 'lat' => null, 'lon' => null,
        'timezone' => null, 'isp' => null,
    ];
    if (!filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
        return $empty;
    }
    $url = "http://ip-api.com/json/" . urlencode($ip)
        . "?fields=status,country,countryCode,region,regionName,city,lat,lon,timezone,isp";
    $ctx = stream_context_create(['http' => ['timeout' => 3]]);
    $raw = @file_get_contents($url, false, $ctx);
    if ($raw === false) return $empty;
    $j = json_decode($raw, true);
    if (!is_array($j) || ($j['status'] ?? '') !== 'success') return $empty;
    return array_merge($empty, $j);
}

$ip        = clientIp();
$ua        = $_SERVER['HTTP_USER_AGENT'] ?? '';
$pageUrl   = isset($body['page_url']) ? substr(trim($body['page_url']), 0, 500) : null;
$pageTitle = isset($body['page_title']) ? substr(trim($body['page_title']), 0, 255) : null;
$referrer  = $body['referrer'] ?? ($_SERVER['HTTP_REFERER'] ?? null);
if ($referrer) $referrer = substr($referrer, 0, 500);

list($device, $browser, $os) = parseUa($ua);

try {
    $db = getDB();

    // Does this IP already exist? (guarantees no duplicated IP)
    $check = $db->prepare("SELECT id FROM visitors_neoassure WHERE ip_address = :ip LIMIT 1");
    $check->execute([':ip' => $ip]);
    $existing = $check->fetch();

    if ($existing) {
        // Known visitor -> just bump counters, no geo lookup needed.
        $upd = $db->prepare("UPDATE visitors_neoassure
            SET last_visit = NOW(),
                visit_count = visit_count + 1,
                page_view_count = page_view_count + 1,
                last_page = :page,
                device_type = :device,
                browser = :browser,
                os = :os,
                user_agent = :ua
            WHERE ip_address = :ip");
        $upd->execute([
            ':page' => $pageUrl, ':device' => $device, ':browser' => $browser,
            ':os' => $os, ':ua' => substr($ua, 0, 500), ':ip' => $ip,
        ]);
    } else {
        // New visitor -> resolve gelocation once, then insert.
        $g = geoLookup($ip);
        $ins = $db->prepare("INSERT INTO visitors_neoassure
            (ip_address, country, country_code, region, region_name, city, latitude, longitude,
             timezone, isp, device_type, browser, os, user_agent, first_page, last_page, referrer)
            VALUES
            (:ip, :country, :cc, :region, :region_name, :city, :lat, :lon,
             :tz, :isp, :device, :browser, :os, :ua, :page, :page, :referrer)
            ON DUPLICATE KEY UPDATE
             last_visit = NOW(), visit_count = visit_count + 1,
             page_view_count = page_view_count + 1, last_page = VALUES(last_page)");
        $ins->execute([
            ':ip' => $ip,
            ':country' => $g['country'],
            ':cc' => $g['countryCode'],
            ':region' => $g['region'],
            ':region_name' => $g['regionName'],
            ':city' => $g['city'],
            ':lat' => $g['lat'],
            ':lon' => $g['lon'],
            ':tz' => $g['timezone'],
            ':isp' => $g['isp'],
            ':device' => $device,
            ':browser' => $browser,
            ':os' => $os,
            ':ua' => substr($ua, 0, 500),
            ':page' => $pageUrl,
            ':referrer' => $referrer,
        ]);
    }

    // Always log the individual page view.
    $pv = $db->prepare("INSERT INTO visitor_page_views_neoassure
        (ip_address, page_url, page_title, referrer, device_type)
        VALUES (:ip, :page, :title, :referrer, :device)");
    $pv->execute([
        ':ip' => $ip, ':page' => $pageUrl, ':title' => $pageTitle,
        ':referrer' => $referrer, ':device' => $device,
    ]);

    jsonResponse(['success' => true, 'page_view_id' => (int)$db->lastInsertId()]);
} catch (PDOException $e) {
    jsonResponse(['success' => false, 'error' => $e->getMessage()], 500);
}
?>
