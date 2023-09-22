<?php

$e = explode(' ', fgets(STDIN));
$a = intval(trim($e[0]));
$b = intval(trim($e[1]));
$c = intval(trim($e[2]));
if ($a>$b){
    if ($b<$c){
        $r = 1;
    }
    if ($a-$b > $b-$c && $b >= $c){
        $r = 1;
    }
}
if ($b>$a && $b-$a <= $c-$b){
    $r=1;
}
if ($a==$b){
    if ($b < $c){;
        $r=1;
    }
}
if ($r==1){
    printf(":)\n");
}else{
    printf(":(\n");
}
?>