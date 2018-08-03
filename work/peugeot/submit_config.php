<?php
$mandrill_api_key = '4pAXD-aDxGnKKTSyWu_Blg';
$email_template = 'mail_template.php';
$email_subject = 'Inscriere Peugeot 2008';
$from_name = '';
$from_email = '';
$to_email = 'razvan.tirboaca@gmail.com';
$to_name = 'Razvan Tirboaca';
$reply_to_headers = 'razvan.tirboaca@gmail.com';

$file = 'leads.csv';

$_env = "PROD";

if ($_env == "DEV") {
	$cc_emails = array(
		array(
			'type' => 'cc',
			'email' => 'petcumihai.andrei@gmail.com',
			'name' => 'Andrei Petcu'
			),
		);
} else {
	$cc_emails = array(
		array(
			'type' => 'cc',
			'email' => 'eugen.ciglenean@trustmotors.ro',
			'name' => 'Eugen Ciglenean'
			),
		array(
			'type' => 'cc',
			'email' => 'mihai.tanasescu@trustmotors.ro',
			'name' => 'Mihai Tanasescu'
			)
		);
}

// Schimba in TRUE daca vrei sa se trimita din partea nume/email din formular; FALSE sa se trimita din partea $from_email/$from_name
$send_from_form = TRUE;