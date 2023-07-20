<?php
$d=0;
$f=0;
$n = intval(fgets(STDIN));

for($i=0;$i<$n;$i++){
    $e = intval(fgets(STDIN));
    if ($e >= 10 && $e <= 20){
        $d++;
    }else{
        $f++;
    }
}
printf("%d in\n", $d);
printf("%d out\n", $f);
?>