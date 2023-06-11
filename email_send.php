<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') 
{
    $name = $_POST['name'];
    $email = $_POST['mail'];
    $subject = $_POST['subject'];
    $message = $_POST['msg'];

    $to = 'lukasz.jowik@onet.pl'; // Adres odbiorcy
    $from = $email; // Adres nadawcy

    // Utworzenie wiadomości e-mail
    $headers[] = "From: $name <$from>";
    $headers[] = "Reply-To: $from";
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-Type: text/html; charset=UTF-8";

    $body = "
    <h2>Wiadomosc z formularza kontaktowego</h2>
    <p><strong>Imie i nazwisko:</strong> $name</p>
    <p><strong>E-mail:</strong> $email</p>
    <p><strong>Temat:</strong> $subject</p>
    <p><strong>Wiadomosc:</strong> $message</p>
    ";

    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Subject: " . $subject . "<br>";
    echo "Message: " . $message . "<br>";

    $sent = mail($to, $subject, $body, implode("\r\n",$headers));

    // Wysłanie wiadomości e-mail
    if ($sent)
     {   
                $response = array('status' => 'success');
                echo json_encode($response);   
    } 

    else 
    {
            $response = array('status' => 'error');
            echo json_encode($response);
    }
}
?>
