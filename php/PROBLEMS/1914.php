<?php

$n = intval(fgets(STDIN));
for ($i=0;$i<$n;$i++){
    $e = explode(' ', fgets(STDIN));
    $n1 = $e[0];
    $n2 = $e[2];
    $r1 = $e[1];
    $r2 = $e[3];

    $e2 = explode(' ', fgets(STDIN));
    $v1 = intval($e2[0]);
    $v2 = intval($e2[1]);
    $res = $v1 + $v2;
    if ($res%2==0){
        if(strcmp("PAR", $r1) == 0){
            printf("%s\n", $n1);
        }else{
            printf("%s\n", $n2);
        }
    } else{
        if(strcmp("IMPAR", $r1) == 0){
            printf("%s\n", $n1);
        }else{
            printf("%s\n", $n2);
        }
    }
}
?>