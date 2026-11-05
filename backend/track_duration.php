<?php
// Updates how long a visitor stayed on a page. Called via navigator.sendBeacon
// when the user leaves the page. Also accumulates the visitor total duration.
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['success' => false, 'error' => 'Method not allowed'], 405);
}

$body = getRequestBody();
$id = isset($body['page_view_id']) ? (int)$body['page_view_id'] : 0;
$duration = isset($body['duration']) ? max(0, min((int)$body['duration'], 86400)) : 0;

if ($id <= 0) {
    jsonResponse(['success' => false, 'error' => 'page_view_id required'], 422);
}

try {
    $db = getDB();

    // Find the page view and its owner IP.
    $sel = $db->prepare("SELECT ip_address, duration_seconds FROM visitor_page_views_neoassure WHERE id = :id LIMIT 1");
    $sel->execute([':id' => $id]);
    $row = $sel->fetch();
    if (!$row) {
        jsonResponse(['success' => false, 'error' => 'Not found'], 404);
    }

    $delta = $duration - (int)$row['duration_seconds'];

    $upd = $db->prepare("UPDATE visitor_page_views_neoassure SET duration_seconds = :d WHERE id = :id");
    $upd->execute([':d' => $duration, ':id' => $id]);

    if ($delta !== 0) {
        $updV = $db->prepare("UPDATE visitors_neoassure
            SET total_duration = GREATEST(0, total_duration + :delta)
            WHERE ip_address = :ip");
        $updV->execute([':delta' => $delta, ':ip' => $row['ip_address']]);
    }

    jsonResponse(['success' => true]);
} catch (PDOException $e) {
    jsonResponse(['success' => false, 'error' => $e->getMessage()], 500);
}
?>
