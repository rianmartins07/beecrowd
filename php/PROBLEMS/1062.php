<?php

$arr = array();
$pos = 0;
$t = 0;

for ($i = 0; $i < 6; $i++) {
    $arr[$i] = floatval(readline());
    if ($arr[$i] > 0) {
        $pos++;
        $t += $arr[$i];
    }
}

echo $pos . " valores positivos\n";
echo number_format(($t / $pos), 1) . "\n";

?>
