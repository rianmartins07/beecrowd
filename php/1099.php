<?php
$n = intval(fgets(STDIN));
for($i=0;$i<$n;$i++){
    $cont = 0;
    $e = fgets(STDIN);
    $e = explode(" ", $e);
    $x = intval($e[0]);
    $y = intval($e[1]);
    if ($y>$x){
        $aux = $y;
        $y = $x;
        $x = $aux;
    }
    for($j=$y+1;$j<$x;$j++){
        if ($j%2!=0){
            $cont+=$j;
        }
    }
    printf("%d\n", $cont);
}

?>