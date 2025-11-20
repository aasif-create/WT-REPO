<?php
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$data = $username . "|" . $email . "|" . $password . "\n";

file_put_contents("users.txt", $data, FILE_APPEND);

header("Location: login.html");
exit();
?>
