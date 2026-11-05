<?php
// Returns every unique visitor plus the pages each IP visited.
require_once __DIR__ . '/config.php';

try {
    $db = getDB();

    $visitors = $db->query("SELECT * FROM visitors_neoassure ORDER BY last_visit DESC LIMIT 5000")->fetchAll();

    // Attach page views for each visitor (grouped by IP).
    $views = $db->query("SELECT id, ip_address, page_url, page_title, referrer, device_type,
                                duration_seconds, visited_at
                         FROM visitor_page_views_neoassure
                         ORDER BY visited_at DESC LIMIT 50000")->fetchAll();

    $byIp = [];
    foreach ($views as $v) {
        $byIp[$v['ip_address']][] = $v;
    }
    foreach ($visitors as &$vis) {
        $vis['page_views'] = $byIp[$vis['ip_address']] ?? [];
    }
    unset($vis);

    jsonResponse(['success' => true, 'count' => count($visitors), 'data' => $visitors]);
} catch (PDOException $e) {
    jsonResponse(['success' => false, 'error' => $e->getMessage()], 500);
}
?>
