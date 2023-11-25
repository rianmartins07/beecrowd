<?php
$e = fgets(STDIN);
$e = explode(' ', $e);
$a = intval(trim($e[0]));
$b = intval(trim($e[1]));
$c = intval(trim($e[2]));
$d = intval(trim($e[3]));

if ($a + $b > $c && $a + $c > $b && $c + $b > $a){
    printf("S\n");
}else if ($a + $b > $d && $a + $d > $b && $b + $d > $a) {
    printf("S\n");
}else if ($a+$c > $d && $d + $a > $c && $c + $d > $a){
    printf("S\n");
}else if ($b+$c > $d && $b + $d > $c && $c + $d > $b){
    printf("S\n");
}else{
    printf("N\n");
}
?>
