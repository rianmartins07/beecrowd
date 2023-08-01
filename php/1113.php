<?php
while(1){
    $e = fgets(STDIN);
    $e = explode(' ', $e);
    $x = intval($e[0]);
    $y = intval($e[1]);

    if ($x>$y){
        printf("Decrescente\n");
    }else if ($x<$y){
        printf("Crescente\n");
    }else{
        return 0;
    }
}


?>