<?php
    $e = floatval(fgets(STDIN));
    
    if ($e <= 400){
        $r = $e*0.15;
        $p=15;
    }
    else if ($e <= 800){
        $r = $e*0.12;
        $p = 12;
    }else if ($e <= 1200){
        $r = $e*0.10;
        $p=10;
    }else if ($e <= 2000){
        $r = $e*0.07;
        $p=7;
    }else if ($e > 2000){
        $r = $e*0.04;
        $p=4;
    }

    printf("Novo salario: %.2f\n", round($e+$r, 2));
    printf("Reajuste ganho: %.2f\n", round($r,2));
    printf("Em percentual: %.0f %%", $p);
    printf("\n");
?>