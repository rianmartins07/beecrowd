<?php
$x[20];
for ($i=0;$i<20;$i++){
    $x[$i] = intval(fgets(STDIN));
}
for($i=0;$i<20;$i++){
    printf("N[%d] = %d\n", $i, $x[19-$i]);
}
?>