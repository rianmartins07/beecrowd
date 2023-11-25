<?php
while (1) {

    $n = explode(' ', fgets(STDIN));
    if (count($n) > 1) {
        $n = array_map(function ($x) {
            return intval($x);
        }, $n);
        $a = $n[0];
        $b = $n[1];
        $c = $n[2];
        printf("%d\n", sqrt($a * $b * 100 / $c));
    } else {
        break;
    }


}

?>