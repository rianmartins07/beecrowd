<?php
$cont = 0;

while (1){
    $n = floatval(fgets(STDIN));
    if ($n<0){
        printf("%.2lf\n", $aux/$cont);
        break;
    }
    $aux+=$n;
    $cont++;
}
?>