<?php
$x[100];
    for($i=0;$i<100;$i++){
        $x[$i] = floatval(fgets(STDIN));
    }
    for($i=0;$i<100;$i++){
        if ($x[$i]<=10){
            printf("A[%d] = %.1lf\n", $i, $x[$i]);
        }
    }
?>