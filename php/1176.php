<?php
function fibonacci($n){
     $z=1;
     $r=0;

    for ($i=0;$i<$n;$i++){
        $aux = $z;
        $z +=$r;
        $r = $aux;
    }
    return $r;
}


$n = intval(fgets(STDIN));

for($i=0;$i<$n;$i++){
    $x = intval(fgets(STDIN));
    printf("Fib(%d) = %d\n", $x, fibonacci($x));
}
?>