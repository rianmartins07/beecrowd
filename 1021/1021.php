<?php
    $a = fgets(STDIN);
    $a *= 100;
    $string = "NOTAS:\n";
    $string .= sprintf( "%d nota(s) de R$ 100.00\n", (int)($a/10000));
    $a -= (((int)($a/10000))*10000);
    $string .= sprintf( "%d nota(s) de R$ 50.00\n", (int)($a/5000));
    $a -= (((int)($a/5000))*5000);
    $string .= sprintf( "%d nota(s) de R$ 20.00\n", (int)($a/2000));
    $a -= (((int)($a/2000))*2000);
    $string .= sprintf( "%d nota(s) de R$ 10.00\n", (int)($a/1000));
    $a -= (((int)($a/1000))*1000);
    $string .= sprintf( "%d nota(s) de R$ 5.00\n", (int)($a/500));
    $a -= (((int)($a/500))*500);
    $string .= sprintf( "%d nota(s) de R$ 2.00\n", (int)($a/200));
    $a -= (((int)($a/200))*200);

    $string .= "MOEDAS:\n";
    $string .= sprintf( "%d moeda(s) de R$ 1.00\n", (int)($a/100));
    $a -= (((int)($a/100))*100);
    $string .= sprintf( "%d moeda(s) de R$ 0.50\n", (int)($a/50));
    $a -= (((int)($a/50))*50);
    $string .= sprintf( "%d moeda(s) de R$ 0.25\n", (int)($a/25));
    $a -= (((int)($a/25))*25);
    $string .= sprintf( "%d moeda(s) de R$ 0.10\n", (int)($a/10));
    $a -= (((int)($a/10))*10);
    $string .= sprintf( "%d moeda(s) de R$ 0.05\n", (int)($a/5));
    $a -= (((int)($a/5))*5);
    $string .= sprintf( "%d moeda(s) de R$ 0.01\n", (int)($a/1));
    $a -= (((int)($a/1))*1);

    echo $string;
?>
