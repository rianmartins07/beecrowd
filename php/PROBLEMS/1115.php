<?php
while (1){
    $e = fgets(STDIN);
    $e = explode(' ', $e);
    $x = intval($e[0]);
    $y = intval($e[1]);

    if ($x>0){
        if ($y>0){
            printf("primeiro\n");
        }else{
            printf("quarto\n");
        }
    }else if($x<0){
        if ($y>0){
            printf("segundo\n");
        }else{
            printf("terceiro\n");
        }
    }else{
        return 1;
    }
}
?>