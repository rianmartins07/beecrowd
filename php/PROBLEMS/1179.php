<?php
$j = 0;
$x = 0;
for ($i = 0; $i < 15; $i++){
    $y = intval(fgets(STDIN));
    if ($y % 2 == 0){
        $par[$j] = $y;
        $j++;
    }
    else{
        $impar[$x] = $y;
        $x++;
    }
    if ($x==5){
        printImpar($impar, $x);
        $x=0;
    }
    if ($j==5){
        printPar($par, $j);
        $j=0;
    }
}
    if ($x>0){
        printImpar($impar, $x);
    }
    if ($j>0){
        printPar($par, $j);
    }


function printImpar($impar, $x){
    for($i=0;$i<$x;$i++){
        printf("impar[%d] = %d\n", $i, $impar[$i]);
    }
}

function printPar($par, $j){
    for($i=0;$i<$j;$i++){
        printf("par[%d] = %d\n", $i, $par[$i]);
    }
}
?>