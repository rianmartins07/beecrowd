<?php
$s = trim(fgets(STDIN));
$m = array();
for ($i=0;$i<12;$i++){
    for ($j=0;$j<12;$j++){
        $m[$i][$j] = floatval(fgets(STDIN));
    }
}
$soma = 0;
for ($i=0;$i<12;$i++){
    for ($j=0;$j<12;$j++){
        if ($i>$j && $i+$j <=10){
            $soma+=$m[$i][$j];
        }
    }
}

if ($s=='S'){
    printf("%.1lf\n", $soma);
}else if ($s=='M'){
    printf("%.1lf\n", $soma/30);
}


?>