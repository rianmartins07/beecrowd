<?php
    $x = intval(fgets(STDIN));
    $y = intval(fgets(STDIN));
    $cont = 0;
    for ($i=$y+1; $i<$x; $i++){
        if ($i%2!=0){
            $cont+=$i;
        }
    }
    printf("%d\n", $cont);
?>