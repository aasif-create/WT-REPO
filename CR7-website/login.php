<?php
$user = $_POST['username'];
$pass = $_POST['password'];

if($user === "admin" && $pass === "1234"){
    header("Location: home.html");
    exit();
}else{
    echo "<h2 style='color:red;text-align:center;margin-top:40px;'>Invalid Login</h2>";
}
?>
