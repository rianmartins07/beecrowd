<?php
    $e = fgets(STDIN);
    $e = intval($e);
    for ($i=$e; $i<$e+12; $i++){
        if($i%2!=0){
            printf("%d\n", $i);
        }
    }

?>