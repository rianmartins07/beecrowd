<?php
$e = fgets(STDIN);
$e = explode(" ", $e);
$e = array_map('intval', $e);

$hi = $e[0];
$mi = $e[1];
$hf = $e[2];
$mf = $e[3];


if ($hi > $hf){
    $r_h = 24 - ($hi-$hf);
}else if ($hi < $hf){
    $r_h = $hf - $hi;
}
else if ($hi == $hf){
    $r_h = 24;
}
if ($mi > $mf){
    $r_m = 60 - ($mi-$mf);
    $r_h -= 1;
}else if ($mi < $mf){
    $r_m = $mf - $mi;
    if ($hi == $hf){
        $r_h -=24;
    }
}
else if ($mi == $mf){
    $r_m = 0;
}

printf("O JOGO DUROU %d HORA(S) E %d MINUTO(S)\n", $r_h, $r_m);


?>
