<?php

function fatorial($n){
    if ($n<=1){
        return 1;
    }else{
        return $n * fatorial($n-1);
    }
}

$n = intval(fgets(STDIN));

$aux = fatorial($n);
printf("%d\n", $aux);
?>