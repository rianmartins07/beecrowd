<?php
$cont = 0;
$i=0;
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
        break;
    }
}
?>