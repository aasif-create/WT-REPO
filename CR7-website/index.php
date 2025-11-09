<?php
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    $time = date('d M Y H:i:s');
    if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest'){
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['status'=>'ok','message'=>"Thank you, ".($name?:'Guest').". Received at $time"]);
        exit;
    } else {
        $n = htmlspecialchars($name,ENT_QUOTES,'UTF-8');
        $e = htmlspecialchars($email,ENT_QUOTES,'UTF-8');
        $m = nl2br(htmlspecialchars($message,ENT_QUOTES,'UTF-8'));
        echo "<!doctype html><html lang='en'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>Message Received</title><link href='https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;900&display=swap' rel='stylesheet'><style>body{font-family:Inter,system-ui,Arial;background:#071023;color:#e6eef8;display:flex;align-items:center;justify-content:center;height:100vh;margin:0} .card{background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01));padding:28px;border-radius:14px;max-width:720px;box-shadow:0 30px 80px rgba(2,6,23,0.6);text-align:left} a{display:inline-block;margin-top:16px;padding:10px 14px;border-radius:10px;background:#ff3d6b;color:#fff;text-decoration:none;font-weight:700}</style></head><body><div class='card'><h1>Thank you, $n</h1><p>Your message has been received at <strong>$time</strong>.</p><h3>Details</h3><ul><li><strong>Name:</strong> ".($n?:'—')."</li><li><strong>Email:</strong> ".($e?:'—')."</li><li><strong>Message:</strong> ".($m?:'—')."</li></ul><a href='index.html'>Back to fan page</a></div></body></html>";
        exit;
    }
}
echo "<!doctype html><html lang='en'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>Ronaldo Server</title></head><body style='font-family:Inter,system-ui,Arial;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#071023;color:#e6eef8;'><div style='text-align:center;background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01));padding:28px;border-radius:12px;box-shadow:0 30px 80px rgba(2,6,23,0.6);'><h1>Cristiano Ronaldo</h1><p>Server time: ".date('d M Y H:i:s')."</p><p><a href='index.html' style='color:#ff3d6b;text-decoration:none;font-weight:700;'>Open Fan Page</a></p></div></body></html>";
?>
