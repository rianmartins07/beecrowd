<?php
$e = fgets(STDIN);
$di = explode(' ', $e)[1];

$e2 = fgets(STDIN);
$e2 = explode(':', $e2);
$e2 = array_map('trim', $e2);
$hi = $e2[0];
$mi = $e2[1];
$si = $e2[2];

$e3 = fgets(STDIN);
$df = explode(' ', $e3)[1];

$e4 = fgets(STDIN);
$e4 = explode(':', $e4);
$e4 = array_map('trim', $e4);
$hf = $e4[0];
$mf = $e4[1];
$sf = $e4[2];

$ri = ($di * 24 * 60 * 60) + ($hi * 60 * 60) + ($mi * 60) + $si;
$rf = ($df * 24 * 60 * 60) + ($hf * 60 * 60) + ($mf * 60) + $sf;

$rf -= $ri;
$dr = (int) ($rf / (24 * 60 * 60));
$rf %= (24 * 60 * 60);
$hr = (int) ($rf / (60 * 60));
$rf %= (60 * 60);
$mr = (int) ($rf / 60);
$rf %= 60;
$sr = $rf;

printf("%d dia(s)\n", $dr);
printf("%d hora(s)\n", $hr);
printf("%d minuto(s)\n", $mr);
printf("%d segundo(s)\n", $sr);
?>
