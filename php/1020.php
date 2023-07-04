<?php
    $e = fgets(STDIN);
    $a = (int) ($e/365);
    $e -= $a*365;
    $m = (int) ($e/30);
    $e -= $m*30;
    $string = sprintf("%d ano(s)\n", $a);
    $string .= sprintf("%d mes(es)\n", $m);
    $string .= sprintf("%.0lf dia(s)\n", $e);
    echo $string
?>