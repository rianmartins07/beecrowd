<?php
$a = 0;
$g = 0;
$d = 0;
while (1){
    $i = intval(fgets(STDIN));
    if ($i==1){
        $a++;
    }else if($i==2){
        $g++;
    }else if($i==3){
        $d++;
    }else if($i==4){
        break;
    }
}
printf("MUITO OBRIGADO\n");
printf("Alcool: %d\n", $a);
printf("Gasolina: %d\n", $g);
printf("Diesel: %d\n", $d);
?>