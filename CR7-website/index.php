<?php
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';
    $time = date('d M Y H:i:s');
    echo "<!doctype html><html lang='en'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>Message Received</title><link rel='stylesheet' href='index.css'></head><body><header class='site-header'><div class='brand'>CR7</div></header><main style='max-width:800px;margin:40px auto;padding:20px;background:#fff;border-radius:10px;'><h1>Thank you, ".($name ?: 'Guest')."</h1><p>Your message has been received at <strong>$time</strong>.</p><h3>Details</h3><ul><li>Name: ".($name ?: '—')."</li><li>Email: ".($email ?: '—')."</li><li>Message: ".($message ?: '—')."</li></ul><a href='index.html' style='display:inline-block;margin-top:12px;padding:10px 14px;border-radius:8px;background:#e63946;color:#fff;text-decoration:none;'>Back to site</a></main><footer class='site-footer' style='max-width:800px;margin:0 auto 40px;padding:12px 20px;color:#6b7280;'>© CR7 Fan Page</footer></body></html>";
    exit;
}
echo "<!doctype html><html lang='en'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>Ronaldo PHP</title></head><body style='font-family:Inter,system-ui,Arial;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#f6f7fb;color:#111827;'><div style='text-align:center;background:#fff;padding:28px;border-radius:12px;box-shadow:0 8px 30px rgba(15,23,42,0.06);'><h1>Cristiano Ronaldo</h1><p>Server time: ".date('d M Y H:i:s')."</p><p><a href='index.html' style='color:#e63946;text-decoration:none;font-weight:700;'>Open Fan Page</a></p></div></body></html>";
?>
