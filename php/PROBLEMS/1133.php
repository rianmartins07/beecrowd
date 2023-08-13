<?php

$x = intval(fgets(STDIN));
$y = intval(fgets(STDIN));

if ($x>$y){
    $aux = $x;
    $x = $y;
    $y = $aux;
}

for ( $i=$x+1;$i<=$y;$i++){
    if ($i%5==2 || $i%5==3){
        printf("%d\n", $i);
    }
}

?>