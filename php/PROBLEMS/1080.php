<?php
$e = intval(fgets(STDIN));
$max = $e;
$pos = 1;
for($i=2;$i<=100;$i++){
    $e = intval(fgets(STDIN));
    if ($e > $max){
        $max = $e;
        $pos = $i;
    }
}
printf("%d\n%d\n", $max, $pos);
?>