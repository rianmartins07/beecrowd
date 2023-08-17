<?php

function soma ($n){
    $cont = 0;
    for($i=0;$i<10;$i++){
        if ($n%2==0){
            $cont+=$n;
        }
        $n++;
    }
    return $cont;
}

$n = intval(fgets(STDIN));
while($n!=0){
    printf("%d\n", soma($n));
    $n = intval(fgets(STDIN));
}

?>