<?php $name = $_POST['txt-name'];
$email = $_POST['txt-email'];
$formcontent="From: $name";
$recipient = "tashinga@letodigital.co.za";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("oof, Seems like that didnt work out there; please try again");
echo "Thank You!";
?>