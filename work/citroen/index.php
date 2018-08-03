<?php 
include_once 'dealers.php'; 

$current_day = date("N");
$current_hour = date("G");
$current_minute = date("i");

$nr_telefon = '';

if ( (!in_array($current_day, array(6,7))) &&
(($current_hour >= 9) &&
(($current_hour < 17) || ($current_hour = 17 && $current_minute < 30)))
) {
    $nr_telefon = '0214047710 ';
} else {
    $nr_telefon = '0731610273';
}

?>
<!DOCTYPE html>
<!--[if lt IE 7]><html class="lt-ie9 lt-ie8 lt-ie7" lang="ro"> <![endif]-->
<!--[if IE 7]><html class="lt-ie9 lt-ie8" lang="ro"> <![endif]-->
<!--[if IE 8]><html class="lt-ie9" lang="ro"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="ro"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Citroen C4</title>
        <meta name="description" content="Citroen Cactus cu avantaj client de 2700 euro">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <div class="center">
            <a class="btn btn-primary call" data-call href="tel:<?= $nr_telefon ?>">
                <svg viewBox="0 0 24 24"><path d="M6.028,10.661c1.6,3.145,4.172,5.717,7.322,7.316l2.445-2.45c0.305-0.305,0.744-0.395,1.127-0.271c1.244,0.41,2.584,0.633,3.967,0.633C21.506,15.889,22,16.383,22,17v3.889C22,21.506,21.506,22,20.889,22C10.456,22,2,13.545,2,3.111C2,2.495,2.5,2,3.111,2H7c0.617,0,1.111,0.495,1.111,1.111c0,1.383,0.222,2.722,0.633,3.966C8.867,7.461,8.778,7.9,8.472,8.206L6.028,10.661z"></path></svg>
                <span>Click to call</span>
            </a>
            <header class="header">
                <img src="images/logo.png">
                <img src="images/headline.png" class="headline">
            </header>
            <img src="images/texts.jpg" class="texts">
            <img src="images/car.jpg" class="car">
            <section class="stamps">
                <img src="images/benefits.png">
                <img src="images/stamp.png">
            </section>
            <div class="form-block">
                <form class="form" id="lead" method="post" action="submit.php">
                    <input type="hidden" name="utm_source" value="<?= isset($_GET['utm_source']) ? $_GET['utm_source'] : ''; ?>" />
                    <div class="form-group">
                        <input type="text" name="nume" class="form-control" placeholder="Nume Prenume">
                    </div><div class="form-group">
                        <input type="email" name="email" class="form-control" placeholder="Email">
                    </div><div class="form-group">
                        <input type="tel" name="telefon" class="form-control" placeholder="Telefon">
                    </div><div class="form-group">
                        <select name="dealer" class="form-control">
                            <option value="">Alege dealer</option>
                            <?php foreach ($dealers as $k=>$v): ?>
                            <?php if ($k > 0): ?>
                            <option value="<?= $k ?>"><?= $v ?></option>
                            <?php endif; ?>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary" disabled="disabled"><span>Mă interesează oferta</span></button>
                </form>
            </div>
            <section class="links">
                <a class="btn btn-primary" id="discover" href="http://ofertelelastminute.trustmotors.ro/"><span>Descoperă Ofertele Speciale</span></a>
                <a class="btn btn-primary call" data-call href="tel:<?= $nr_telefon ?>">
                    <svg viewBox="0 0 24 24"><path d="M6.028,10.661c1.6,3.145,4.172,5.717,7.322,7.316l2.445-2.45c0.305-0.305,0.744-0.395,1.127-0.271c1.244,0.41,2.584,0.633,3.967,0.633C21.506,15.889,22,16.383,22,17v3.889C22,21.506,21.506,22,20.889,22C10.456,22,2,13.545,2,3.111C2,2.495,2.5,2,3.111,2H7c0.617,0,1.111,0.495,1.111,1.111c0,1.383,0.222,2.722,0.633,3.966C8.867,7.461,8.778,7.9,8.472,8.206L6.028,10.661z"></path></svg>
                    <span>Click to call</span>
                </a>
            </section>
            <footer class="footer">
                <p style="text-align:justify">Ofertă supusă unor termene şi condiţii, valabilă în limita stocului disponibil si exclusiv in perioada 1-31.12.2015. Avantajul client este valabil pentru Citroën C4 Feel 1.6 E-HDi 115 BVM6 Euro 5 şi include discount-ul special de până la 2.910€ cu TVA. Garanţie contractuală de 4 ani, în limita a 100.000 km.</p>
            </footer>
        </div>
        <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
        <script src="js/jquery.validate.min.js"></script>
        <script src="js/general.js"></script>
    </body>
</html>