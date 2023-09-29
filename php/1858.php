<?php
$n = intval(fgets(STDIN));
$e = explode(' ', fgets(STDIN));
$r = $e[0];
for($i=0;$i<$n;$i++){
    $x = intval($e[$i]);
    if ($i==0){
        $aux = $x;
        $r = $i;
    }
    if ($x < $aux){
        $aux = $x;
        $r = $i;
    }
}
printf("%d\n", $r+1);

?>