<?php
// One-time migration: creates the visitor-tracking tables.
// Open this file once in the browser after uploading it to the server.
require_once __DIR__ . '/config.php';

$db = getDB();

// One row per unique IP (no duplicated IP thanks to the UNIQUE key).
$visitors = "CREATE TABLE IF NOT EXISTS visitors_neoassure (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ip_address VARCHAR(64) NOT NULL,
    country VARCHAR(120) DEFAULT NULL,
    country_code VARCHAR(8) DEFAULT NULL,
    region VARCHAR(120) DEFAULT NULL,
    region_name VARCHAR(120) DEFAULT NULL,
    city VARCHAR(120) DEFAULT NULL,
    latitude DECIMAL(10,6) DEFAULT NULL,
    longitude DECIMAL(10,6) DEFAULT NULL,
    timezone VARCHAR(80) DEFAULT NULL,
    isp VARCHAR(190) DEFAULT NULL,
    device_type VARCHAR(30) DEFAULT NULL,
    browser VARCHAR(60) DEFAULT NULL,
    os VARCHAR(60) DEFAULT NULL,
    user_agent VARCHAR(500) DEFAULT NULL,
    first_page VARCHAR(500) DEFAULT NULL,
    last_page VARCHAR(500) DEFAULT NULL,
    referrer VARCHAR(500) DEFAULT NULL,
    visit_count INT NOT NULL DEFAULT 1,
    page_view_count INT NOT NULL DEFAULT 1,
    total_duration INT NOT NULL DEFAULT 0,
    first_visit DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_visit DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uniq_ip (ip_address),
    INDEX idx_last_visit (last_visit),
    INDEX idx_country (country)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";

// One row per page view (which page an IP visited, when, and for how long).
$pageviews = "CREATE TABLE IF NOT EXISTS visitor_page_views_neoassure (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ip_address VARCHAR(64) NOT NULL,
    page_url VARCHAR(500) DEFAULT NULL,
    page_title VARCHAR(255) DEFAULT NULL,
    referrer VARCHAR(500) DEFAULT NULL,
    device_type VARCHAR(30) DEFAULT NULL,
    duration_seconds INT NOT NULL DEFAULT 0,
    visited_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_ip (ip_address),
    INDEX idx_visited (visited_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";

try {
    $db->exec($visitors);
    $db->exec($pageviews);
    jsonResponse(['success' => true, 'message' => 'Tables visitors_neoassure & visitor_page_views_neoassure ready']);
} catch (PDOException $e) {
    jsonResponse(['success' => false, 'error' => $e->getMessage()], 500);
}
?>
