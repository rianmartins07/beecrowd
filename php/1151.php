<?php

$n = intval(fgets(STDIN));
$aux = 1;
$k = 0;

for ($i=0;$i<$n;$i++){
    if ($i<$n-1){
        printf("%d ", $k);
    }else{
        printf("%d\n", $k);
    }
    if ($i>=1){
        $z = $aux;
        $aux+=$k;
        $k=$z;
    }else{
        $k=$aux;
    }
}

?>