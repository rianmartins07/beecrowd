<?php
$n = intval(fgets(STDIN));

for ($i=1;$i<=$n;$i++){
    printf("%d %d %d\n", $i, $i*$i, $i*$i*$i);
}

?>