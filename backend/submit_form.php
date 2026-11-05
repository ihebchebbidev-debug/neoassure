<?php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['success' => false, 'error' => 'Method not allowed'], 405);
}

$body = getRequestBody();

$full_name = trim($body['full_name'] ?? '');
$phone     = trim($body['phone'] ?? '');

if ($full_name === '' || $phone === '') {
    jsonResponse(['success' => false, 'error' => 'Nom et téléphone obligatoires'], 422);
}

// Phone sanitization & validation
$cleanPhone = preg_replace('/[\s.\-_/()]/', '', $phone);
if (strlen($cleanPhone) < 8) {
    jsonResponse(['success' => false, 'error' => 'Numéro de téléphone invalide'], 422);
}

// First name support (vorname or first_name)
$vorname = trim($body['vorname'] ?? $body['first_name'] ?? '');
if ($vorname === '') $vorname = null;

$email          = isset($body['email']) && trim($body['email']) !== '' ? trim($body['email']) : null;
$age            = isset($body['age']) && $body['age'] !== '' ? (int)$body['age'] : null;
$marital_status = $body['marital_status'] ?? $body['family_status'] ?? null;
$city           = $body['city'] ?? null;
$postal_code    = $body['postal_code'] ?? null;
$insurance_type = $body['insurance_type'] ?? null;
$current_insurer = $body['current_insurer'] ?? null;
$budget_max     = isset($body['budget_max']) && $body['budget_max'] !== '' ? (float)$body['budget_max'] : null;
$preferred_contact = $body['preferred_contact'] ?? null;
$preferred_time = $body['preferred_time'] ?? null;
$coverage = $body['coverage_priorities'] ?? null;
if (is_array($coverage)) $coverage = implode(', ', $coverage);
$message = $body['message'] ?? null;

$source_page = $body['source_page'] ?? null;
if (is_string($source_page) && strlen($source_page) > 1024) {
    $source_page = substr($source_page, 0, 1024);
}
$referrer = $body['referrer'] ?? ($_SERVER['HTTP_REFERER'] ?? null);
if (is_string($referrer) && strlen($referrer) > 500) {
    $referrer = substr($referrer, 0, 500);
}

// Marketing Attribution
$utm_source   = $body['utm_source'] ?? null;
$utm_medium   = $body['utm_medium'] ?? null;
$utm_campaign = $body['utm_campaign'] ?? null;
$utm_content  = $body['utm_content'] ?? null;
$utm_term     = $body['utm_term'] ?? null;
$fbclid       = $body['fbclid'] ?? null;
$event_id     = $body['event_id'] ?? null;

// Resolve real client IP and User-Agent (forwarded by serverless proxy or direct)
$rawIp = $body['client_ip'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['HTTP_CLIENT_IP'] ?? $_SERVER['REMOTE_ADDR'] ?? null;
if ($rawIp) {
    $parts = explode(',', $rawIp);
    $ip = trim($parts[0]);
} else {
    $ip = null;
}
$ua = $body['client_user_agent'] ?? $_SERVER['HTTP_USER_AGENT'] ?? null;
if (is_string($ua) && strlen($ua) > 500) {
    $ua = substr($ua, 0, 500);
}

try {
    $db = getDB();

    // Check table columns to support extra tracking fields dynamically
    $existingCols = [];
    $colStmt = $db->query("SHOW COLUMNS FROM leads_neoassure");
    while ($col = $colStmt->fetch()) {
        $existingCols[$col['Field']] = true;
    }

    // Auto-add tracking columns if they don't exist yet
    $colsToAdd = [
        'utm_content' => "VARCHAR(150) DEFAULT NULL",
        'utm_term'    => "VARCHAR(150) DEFAULT NULL",
        'fbclid'      => "VARCHAR(255) DEFAULT NULL",
        'event_id'    => "VARCHAR(100) DEFAULT NULL",
    ];
    foreach ($colsToAdd as $colName => $colDef) {
        if (!isset($existingCols[$colName])) {
            try {
                $db->exec("ALTER TABLE leads_neoassure ADD COLUMN `$colName` $colDef");
                $existingCols[$colName] = true;
            } catch (Exception $ignored) {}
        }
    }

    $fields = [
        'full_name' => ':full_name',
        'vorname' => ':vorname',
        'phone' => ':phone',
        'email' => ':email',
        'age' => ':age',
        'marital_status' => ':marital_status',
        'city' => ':city',
        'postal_code' => ':postal_code',
        'insurance_type' => ':insurance_type',
        'current_insurer' => ':current_insurer',
        'budget_max' => ':budget_max',
        'preferred_contact' => ':preferred_contact',
        'preferred_time' => ':preferred_time',
        'coverage_priorities' => ':coverage_priorities',
        'message' => ':message',
        'source_page' => ':source_page',
        'referrer' => ':referrer',
        'utm_source' => ':utm_source',
        'utm_medium' => ':utm_medium',
        'utm_campaign' => ':utm_campaign',
        'ip_address' => ':ip',
        'user_agent' => ':ua',
    ];

    $params = [
        ':full_name' => $full_name,
        ':vorname' => $vorname,
        ':phone' => $phone,
        ':email' => $email,
        ':age' => $age,
        ':marital_status' => $marital_status,
        ':city' => $city,
        ':postal_code' => $postal_code,
        ':insurance_type' => $insurance_type,
        ':current_insurer' => $current_insurer,
        ':budget_max' => $budget_max,
        ':preferred_contact' => $preferred_contact,
        ':preferred_time' => $preferred_time,
        ':coverage_priorities' => $coverage,
        ':message' => $message,
        ':source_page' => $source_page,
        ':referrer' => $referrer,
        ':utm_source' => $utm_source,
        ':utm_medium' => $utm_medium,
        ':utm_campaign' => $utm_campaign,
        ':ip' => $ip,
        ':ua' => $ua,
    ];

    if (isset($existingCols['utm_content'])) {
        $fields['utm_content'] = ':utm_content';
        $params[':utm_content'] = $utm_content;
    }
    if (isset($existingCols['utm_term'])) {
        $fields['utm_term'] = ':utm_term';
        $params[':utm_term'] = $utm_term;
    }
    if (isset($existingCols['fbclid'])) {
        $fields['fbclid'] = ':fbclid';
        $params[':fbclid'] = $fbclid;
    }
    if (isset($existingCols['event_id'])) {
        $fields['event_id'] = ':event_id';
        $params[':event_id'] = $event_id;
    }

    $colList = implode(', ', array_keys($fields));
    $valList = implode(', ', array_values($fields));

    $stmt = $db->prepare("INSERT INTO leads_neoassure ($colList) VALUES ($valList)");
    $stmt->execute($params);

    jsonResponse(['success' => true, 'id' => $db->lastInsertId(), 'event_id' => $event_id]);
} catch (PDOException $e) {
    jsonResponse(['success' => false, 'error' => $e->getMessage()], 500);
}
?>
