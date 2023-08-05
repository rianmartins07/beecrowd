<?php

$x = intval(fgets(STDIN));
$y = intval(fgets(STDIN));

if ($x>$y){
    $aux = $x;
    $x = $y;
    $y = $aux;
}

$cont=0;
for ( $i=$x;$i<=$y;$i++){
    if ($i%13!=0){
        $cont+=$i;
    }
}
printf("%d\n", $cont);
?>