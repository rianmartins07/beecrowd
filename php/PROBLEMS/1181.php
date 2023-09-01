<?php
$l = intval(fgets(STDIN));
$s = trim(fgets(STDIN));
$m = array();
for ($i=0;$i<12;$i++){
    for ($j=0;$j<12;$j++){
        $m[$i][$j] = floatval(fgets(STDIN));
    }
}
$soma = 0;
if ($s == 'S') {

    $i=$l;
    while ($i==$l){
        for ($j=0;$j<12;$j++){
            $soma+=$m[$i][$j];
        }
        $i++;
    }
    printf("%.1lf\n", $soma);
} else if ($s == 'M') {
    $i=$l;
    while ($i==$l){
        for ($j=0;$j<12;$j++){
            $soma+=$m[$i][$j];
        }
        $i++;
    }
    printf("%.1lf\n", $soma/12);
}

?>