<?php
    $e = fgets(STDIN);
    $e = explode(' ', $e);
    $a = $e[0];
    $b = $e[1];
    $c = $e[2];
    if ($a+$b > $c && $a+$c > $b && $b+$c > $a){
        $perimetro = $a + $b + $c;
        printf("Perimetro = %.1f\n", $perimetro);
    }
    else{
        $area = (($a + $b) * $c) / 2;
        printf("Area = %.1f\n", $area);
    }
?>
