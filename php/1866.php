<?php

$n = intval(fgets(STDIN));
for ($i=0;$i<$n;$i++){
    $x = intval(fgets(STDIN));
    if ($x%2 == 0){
        printf("0\n");
    }else{
        printf("1\n");
    }
}
?>