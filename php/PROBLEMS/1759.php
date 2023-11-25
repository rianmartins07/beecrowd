<?php
    $n = intval(fgets(STDIN));
    for($i=0;$i<$n;$i++){
        if ($i<$n-1){
            printf("Ho ");
        }else{
            printf("Ho!\n");
        }
    }
?>