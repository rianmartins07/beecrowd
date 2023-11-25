<?php
$e = explode(' ', fgets(STDIN));
$a = intval(trim($e[0]));
$b = intval(trim($e[1]));
if ($a==$b){
    printf("%d\n", $a);
}else if ($a != $b){
    if ($a > $b){
        printf("%d\n", $a);
    }else{
        printf("%d\n", $b);
    }
}
?>