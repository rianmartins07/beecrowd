<?php
$e = intval(fgets(STDIN));

for ($i=0;$i<$e;$i++){
    $n =  explode(' ', fgets(STDIN)); 
    $n = array_map('floatval', $n);
    printf("%.1f\n", ($n[0]*2 + $n[1]*3 + $n[2]*5)/10);
}

?>