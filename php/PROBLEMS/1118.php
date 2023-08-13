<?php
$cont = 0;
$i=0;
$cal=0;
while(1){
    $x = floatval(fgets(STDIN));

    if ($x>=0 && $x<=10){
        $cont+=$x;
        $i++;
    }else{
        printf("nota invalida\n");
    }
    if ($i==2){
        printf("media = %.2f\n", $cont/2);
        while (1){
            printf("novo calculo (1-sim 2-nao)\n");
            $cal = floatval(fgets(STDIN));
            if ($cal == 1){
                $i=0;
                $cont=0;
                break;
            }else if ($cal==2){
                return 0;
            }
        }
    }
}
?>