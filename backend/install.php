<?php
require_once __DIR__ . '/config.php';

$db = getDB();

$sql = "CREATE TABLE IF NOT EXISTS leads_neoassure (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    vorname VARCHAR(150) DEFAULT NULL,
    phone VARCHAR(40) NOT NULL,
    email VARCHAR(190) DEFAULT NULL,
    age INT DEFAULT NULL,
    marital_status VARCHAR(60) DEFAULT NULL,
    city VARCHAR(120) DEFAULT NULL,
    postal_code VARCHAR(10) DEFAULT NULL,
    insurance_type VARCHAR(120) DEFAULT NULL,
    current_insurer VARCHAR(120) DEFAULT NULL,
    budget_max DECIMAL(10,2) DEFAULT NULL,
    preferred_contact VARCHAR(40) DEFAULT NULL,
    preferred_time VARCHAR(60) DEFAULT NULL,
    coverage_priorities TEXT DEFAULT NULL,
    message TEXT DEFAULT NULL,
    source_page TEXT DEFAULT NULL,
    referrer VARCHAR(500) DEFAULT NULL,
    utm_source VARCHAR(120) DEFAULT NULL,
    utm_medium VARCHAR(120) DEFAULT NULL,
    utm_campaign VARCHAR(120) DEFAULT NULL,
    utm_content VARCHAR(150) DEFAULT NULL,
    utm_term VARCHAR(150) DEFAULT NULL,
    fbclid VARCHAR(255) DEFAULT NULL,
    event_id VARCHAR(100) DEFAULT NULL,
    ip_address VARCHAR(64) DEFAULT NULL,
    user_agent VARCHAR(500) DEFAULT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_created (created_at),
    INDEX idx_phone (phone),
    INDEX idx_event (event_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";

try {
    $db->exec($sql);
    jsonResponse(['success' => true, 'message' => 'Table leads_neoassure ready']);
} catch (PDOException $e) {
    jsonResponse(['success' => false, 'error' => $e->getMessage()], 500);
}
?>
