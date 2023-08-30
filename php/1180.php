<?php
$n = intval(fgets(STDIN));
$x=[];
$x = explode(' ', fgets(STDIN));
$x = array_map(function($n){
    return intval($n);
}, $x);

$pos = 0;
$menor = $x[0];
for ($i=1;$i<$n;$i++){
    if ($x[$i]<$menor){
        $menor=$x[$i];
        $pos = $i;
    }
}
printf("Menor valor: %d\n", $menor);
printf("Posicao: %d\n", $pos);
?>