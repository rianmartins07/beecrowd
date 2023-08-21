<?php

$n = intval(fgets(STDIN));
for ($i=0;$i<$n;$i++){
    $cont = 1;
    $x = intval(fgets(STDIN));
    for ($j=2;$j<=$x;$j++){
        if ($x % $j==0){
            $cont+=1;
        }
    }
    if ($cont>2){
        printf("%d nao eh primo\n", $x);
    }else{
        printf("%d eh primo\n", $x);
    }
}
?>