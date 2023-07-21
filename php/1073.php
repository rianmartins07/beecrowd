<?php
    $e = intval(fgets(STDIN));
    for ($i=1;$i<=$e;$i++){
        if ($i%2==0){
            printf("%d^2 = %d\n", $i, $i*$i);
        }
    }

?>