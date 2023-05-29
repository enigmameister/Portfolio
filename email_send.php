<?php

if (isset($_POST['submit'])) 
{
    $name = $_POST['name'];
    $email = $_POST['mail'];
    $subject = $_POST['subject'];
    $message = $_POST['msg'];

    $to = 'lukasz.jowik@onet.pl';
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";

    $success = mail($to, $subject, $message, $headers);

    if ($success) echo 'Wiadomość została wysłana';
    else echo 'Wykryto bład w skrypcie ';
}

?>