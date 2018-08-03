<?php
$row = 0;
$leads = array();
if (($handle = fopen("leads.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
    	$leads[] = $data;
        $row++;
    }
    fclose($handle);
}
krsort($leads);
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Citroen</title>
		<link href="css/bootstrap.min.css" rel="stylesheet">
	</head>
	<body>
		<div class="container">
			<table class="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Data</th>
						<th>Nume</th>
						<th>Email</th>
						<th>Telefon</th>
						<th>Dealer</th>
						<th>Email Dealer</th>
						<th>Sursa</th>
					</tr>
				</thead>
				<tbody>
				<?php if(isset($leads) && count($leads)): ?>
				<?php $i = 1; ?>
				<?php foreach ($leads as $lead): ?>
					<tr>
						<th scope="row"><?= $i ?></th>
						<td><?= $lead[6] ?></td>
						<td><?= $lead[0] ?></td>
						<td><a href="mailto:<?= $lead[1] ?>"><?= $lead[1] ?></a></td>
						<td><?= $lead[2] ?></td>
						<td><?= $lead[3] ?></td>
						<td><?= $lead[5] ?></td>
						<td><?= $lead[7] ?></td>
					</tr>
				<?php ++$i; ?>
				<?php endforeach; ?>
				<?php endif; ?>
				</tbody>
			</table>
		</div>
	</body>
</html>