<?php
$mandrill_api_key = '4pAXD-aDxGnKKTSyWu_Blg';
$email_template = 'mail_template.php';
$email_subject = 'Inscriere noua pentru Citroen C4 Nov 2015';
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
			'email' => 'florian.cojanu@trustmotors.ro',
			'name' => 'Florian Cojanu'
			),
		array(
			'type' => 'cc',
			'email' => 'florin.blagoi@trustmotors.ro',
			'name' => 'Florin Blagoi'
			)
		);
}

// Schimba in TRUE daca vrei sa se trimita din partea nume/email din formular; FALSE sa se trimita din partea $from_email/$from_name
$send_from_form = TRUE;