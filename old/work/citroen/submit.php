<?php
require_once 'submit_config.php';
include_once 'lib/Mandrill.php';
include_once 'dealers.php';

header('Content-Type: application/json');

// inputs
$nume = isset($_POST['nume']) ? htmlspecialchars(strip_tags($_POST['nume'])) : false;
$telefon = isset($_POST['telefon']) ? htmlspecialchars(strip_tags($_POST['telefon'])) : false;
$email = false;
if (isset($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $email = htmlspecialchars(strip_tags($_POST['email']));
}
$dealer = isset($_POST['dealer']) ? htmlspecialchars(strip_tags($_POST['dealer'])) : false;

// validate data
if ($send_from_form) {
    $from_name = $nume;
    $from_email = $email;
}
if ($_env == "DEV") {
    $mail_to = $to_email;
    $name_to = $to_name;
} else {
    $mail_to = isset($emails[(isset($_POST['dealer']) ? (int)$_POST['dealer'] : false)]) ? $emails[(isset($_POST['dealer']) ? (int)$_POST['dealer'] : false)] : false;
    $name_to = isset($names[(isset($_POST['dealer']) ? (int)$_POST['dealer'] : false)]) ? $names[(isset($_POST['dealer']) ? (int)$_POST['dealer'] : false)] : false;
}

if (
    !($from_name) ||
    !($from_email) ||
    !($telefon) ||
    !($dealer) ||
    !($mail_to)
    ) {
    die(json_encode(array('error' => true)));
}

$utm_source = isset($_POST['utm_source']) ? strip_tags(filter_var($_POST['utm_source']), FILTER_SANITIZE_STRING) : '';

$lead = array(
    $from_name,
    $from_email,
    $telefon,
    $dealers[$dealer],
    $name_to,
    $mail_to,
    date('d M Y - H:i:s'),
    $utm_source
    );

$fp = fopen($file, 'a');
fputcsv($fp, $lead);

// email template
ob_start();
include($email_template);
$body = ob_get_contents();
ob_end_clean();

// send email
try {
    $mandrill = new Mandrill($mandrill_api_key);
    $message = array(
        'html' => $body,
        
        'subject' => $email_subject,
        'from_email' => $from_email,
        'from_name' => $from_name,
        'to' => array_merge(
            array(
                array(
                    'email' => $mail_to,
                    'name' => $name_to,
                    'type' => 'to'
                )
            ),
            $cc_emails
        ),
        'headers' => array('Reply-To' => $mail_to),
        'important' => true,
        'track_opens' => true,
        'track_clicks' => true
    );

    $async = false;
    $ip_pool = 'Main Pool';
    
    $result = $mandrill->messages->send($message, $async, $ip_pool);
    
    die(json_encode('done'));
} catch(Mandrill_Error $e) {
    // echo 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage();
    // throw $e;
}

header('Content-Type: application/json');
die(json_encode('done'));