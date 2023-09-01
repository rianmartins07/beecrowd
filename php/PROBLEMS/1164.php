<?php

function perfeito($n){
    $i = 1;
    $cont = 0;
    while ($i < $n) {
        if ($n % $i == 0) {
            $cont += $i;
        }
        $i++;
    }
    if ($cont == $n) {
        printf("%d eh perfeito\n", $n);
    } else {
        printf("%d nao eh perfeito\n", $n);
    }
}


$n = intval(fgets(STDIN));
for ($i=0;$i<$n;$i++){
    $x = intval(fgets(STDIN));
    perfeito($x);
}


?>