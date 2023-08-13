<?php

$x = intval(fgets(STDIN));
$z = intval(fgets(STDIN));

while($z<=$x){
    $z = intval(fgets(STDIN));
}
$cont=1;
$aux=$x;
while ($aux<$z){
    $aux +=$x;
    $x+=1;
    $cont++;
}

printf("%d\n", $cont);
?>