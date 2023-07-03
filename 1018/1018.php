<?php
    $a = fgets(STDIN);
    $string .= sprintf("%d\n", $a);
    $string .= sprintf( "%d nota(s) de R$ 100,00\n", (int)($a/100));
    $a -= (((int)($a/100))*100);
    $string .= sprintf( "%d nota(s) de R$ 50,00\n", (int)($a/50));
    $a -= (((int)($a/50))*50);
    $string .= sprintf( "%d nota(s) de R$ 20,00\n", (int)($a/20));
    $a -= (((int)($a/20))*20);
    $string .= sprintf( "%d nota(s) de R$ 10,00\n", (int)($a/10));
    $a -= (((int)($a/10))*10);
    $string .= sprintf( "%d nota(s) de R$ 5,00\n", (int)($a/5));
    $a -= (((int)($a/5))*5);
    $string .= sprintf( "%d nota(s) de R$ 2,00\n", (int)($a/2));
    $a -= (((int)($a/2))*2);
    $string .= sprintf( "%d nota(s) de R$ 1,00\n", (int)($a/1));
    $a -= (((int)($a/1))*1);
    echo $string;
?>
