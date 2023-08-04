<?php
$n = intval(fgets(STDIN));

for($i=0;$i<$n;$i++){
    $e = fgets(STDIN);
    $e = explode(' ', $e);
    $x = intval($e[0]);
    $y = intval($e[1]);

    if ($y!=0){
        printf("%.1f\n", $x/$y);
    }else{
        printf("divisao impossivel\n");
    }
}

?>