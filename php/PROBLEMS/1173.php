<?php
    $j = intval(fgets(STDIN));
    for($i=0;$i<10;$i++){
        printf("N[%d] = %d\n", $i, $j);
        $j*=2;
    }
?>