<?php
    $n = floatval(fgets(STDIN));
    for($i=0;$i<100;$i++){
        printf("N[%d] = %.4lf\n", $i, $n);
        $n/=2;
    }
?>