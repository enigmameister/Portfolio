<?php

if(isset($_GET['mail']))
{
    $email_to = "lukasz.jowik@onet.pl";
    $email_subject = "Wiadomośc ze strony lukaszjowik.com";
    $email_from = $_GET['mail'];
    $email_message = "Szczególy wiadomości:\n\n";
    $email_message .= "Imie ".$_GET['name']."\n";
    $email_message .= "E-mail: ".$_GET['mail']."\n";
    $email_message .= "Temat: ".$_GET['subject']."\n";
    $email_message .= "Tresc wiadomosci:\n".$_GET['msg']."\n";

    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n".
    'X-Mailer: PHP/' .phpversion();

    mail($email_to, $email_subject, $email_message, $headers);

    echo "Wiadomosc została wysłana.";
}
?>