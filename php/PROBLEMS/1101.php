<?php

function funcao($x, $y){
    $sum = 0;
    for ($i=$y;$i<=$x;$i++){
        printf("%d ", $i);
        $sum+=$i;
    }
    printf("Sum=%d\n", $sum);
}

while (true){
    $e = fgets(STDIN);
    $e = explode(' ', $e);
    $x = intval($e[0]);
    $y = intval($e[1]);
    if ($y > $x){
        $aux = $y;
        $y = $x;
        $x = $aux;
    }
    if ($x <= 0 || $y <= 0){
        return;
    }
    funcao($x, $y);
}

?>