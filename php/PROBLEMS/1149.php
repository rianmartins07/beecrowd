<?php

$e = explode(' ', fgets(STDIN));
$a = intval($e[0]);

for ($i=1;$i<count($e);$i++){
    if ($e[$i] > 0){
        $n = $e[$i];
        break;
    }
}

$r = 0;
for ($i=0;$i<$n;$i++){
    $r+=$a;
    $a++;
}
printf("%d\n", $r);

?>