<?php
    $e = fgets(STDIN);
    $e = explode(' ', $e);
    $x = $e[0];
    $y = $e[1];


    if($x == 0 && $y!=0){
        printf("Eixo Y\n");
        return 0;
    }

    else if($y == 0 && $x != 0){
        printf("Eixo X\n");
        return 0;
    }
    if( $x > 0 && $y > 0){
        printf("Q1\n");
    }
    else if( $x < 0 && $y > 0){
        printf("Q2\n");
    }
    else if( $x < 0 && $y < 0){
        printf("Q3\n");
    }
    else if( $x > 0 && $y < 0){
        printf("Q4\n");
    }
    else{
        printf("Origem\n");
    }
?>