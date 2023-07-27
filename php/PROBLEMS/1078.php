<?php
$e = intval(fgets(STDIN));

for ($i=1;$i<=10;$i++){
    printf("%d x %d = %d\n", $i, $e, $e*$i);
}

?>
