<?php
require_once __DIR__ . '/config.php';

try {
    $db = getDB();
    $stmt = $db->query("SELECT * FROM leads_neoassure ORDER BY created_at DESC LIMIT 5000");
    $rows = $stmt->fetchAll();
    jsonResponse(['success' => true, 'count' => count($rows), 'data' => $rows]);
} catch (PDOException $e) {
    jsonResponse(['success' => false, 'error' => $e->getMessage()], 500);
}
?>
