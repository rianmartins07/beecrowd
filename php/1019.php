<?php 
    $a = fgets(STDIN);
    $h = (int) ($a/3600);
    $a = $a - ($h*3600);
    $m = (int)($a/60);
    $a -= ($m*60);
    $string = sprintf ("%d:%d:%d\n", $h,$m,$a);
    echo $string;
?>