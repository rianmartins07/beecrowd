<?php
    $e = fgets(STDIN);
    $e = explode(' ', $e);
    if ($e[0] == 1){
        $e[0] = 4.0;
    }
    else if ($e[0] == 2){
        $e[0] = 4.5;
    }
    else if ($e[0] == 3){
        $e[0] = 5.0;
    }
    else if ($e[0] == 4){
        $e[0] = 2;
    }
    else{
        $e[0] = 1.5;
    }
    
    printf("Total: R$ %.2f\n", $e[0]*$e[1]);
?>