<?php
$e = explode(' ', fgets(STDIN));
$a = trim($e[0]);
$b = trim($e[1]);

if ($a >= 0){
    $quociente = $a/$b;
    $r = $a-intval($quociente)*$b;
    printf("%d %d\n", intval($quociente), $r);
}else{
    if ($b<0){
        $x = $b*(-1);
    }else{
        $x = $b;
    }
    for($i=0;$i<$x*9;$i++){
        if ($x*$i >= $a*-1){
            $r = ($x*$i)-$a*-1;
            $quociente=($x*$i)/$b;
            printf("%d %d\n", intval($quociente)*-1, $r);
            break;
        }
    }
}

?>