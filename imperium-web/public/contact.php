<?php
// Contact form endpoint for the static site. Receives the enquiry form POST and emails it.
// CONFIRM before launch: recipient mailbox and whether enquiries should also go to a CRM
// (audit section 13 / 15). PHP mail() must be enabled on the host, or replace with SMTP.

declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('X-Robots-Tag: noindex');

const RECIPIENT = 'sales@imperiumapp.com';
const FROM = 'website@imperiumapp.com';

function out(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    out(405, ['ok' => false, 'error' => 'Method not allowed']);
}

// Honeypot: bots fill the hidden "website" field.
if (!empty($_POST['website'])) {
    out(200, ['ok' => true]);
}

// Same-origin check
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !preg_match('#^https://(www\.)?imperiumapp\.com$#', $origin)) {
    out(403, ['ok' => false, 'error' => 'Forbidden']);
}

// Simple rate limit: 5 submissions per IP per hour.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$bucket = sys_get_temp_dir() . '/imp_contact_' . md5($ip);
$now = time();
$hits = array_filter(is_file($bucket) ? (array) json_decode((string) file_get_contents($bucket), true) : [], fn($t) => $t > $now - 3600);
if (count($hits) >= 5) {
    out(429, ['ok' => false, 'error' => 'Too many requests']);
}
$hits[] = $now;
file_put_contents($bucket, json_encode(array_values($hits)));

function field(string $k, int $max = 200): string {
    $v = trim((string) ($_POST[$k] ?? ''));
    $v = str_replace(["\r", "\n"], ' ', mb_substr($v, 0, $max));
    return $v;
}

$name = field('name');
$email = field('email');
$company = field('company');
$country = field('country');
$role = field('role');
$interest = field('interest');
$message = trim(mb_substr((string) ($_POST['message'] ?? ''), 0, 5000));
$consent = ($_POST['consent'] ?? '') === 'yes';

if ($name === '' || $company === '' || $message === '' || !$consent || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    out(422, ['ok' => false, 'error' => 'Missing or invalid fields']);
}

$subject = 'Website enquiry: ' . ($interest !== '' ? $interest : 'General') . ' (' . $company . ')';
$body = "Name: $name\nEmail: $email\nCompany: $company\nCountry/region: $country\nRole: $role\nInterest: $interest\n\nMessage:\n$message\n\nConsent to contact: yes\nSubmitted: " . gmdate('Y-m-d H:i') . " UTC\n";
$headers = [
    'From: Imperium website <' . FROM . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=utf-8',
];

if (!@mail(RECIPIENT, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers))) {
    out(500, ['ok' => false, 'error' => 'Mail failed']);
}
out(200, ['ok' => true]);
