<?php

$e = fgets(STDIN);
$e = explode(' ', trim($e));
$e = array_map('floatval', $e);
rsort($e);
$a = $e[0];
$b = $e[1];
$c = $e[2];


if ($a >= $b + $c)
{
    printf("NAO FORMA TRIANGULO\n");
    return 0;
}
if ($a * $a == ($b * $b + $c * $c))
{
    printf("TRIANGULO RETANGULO\n");
}
if ($a * $a > ($b * $b + $c * $c))
{
    printf("TRIANGULO OBTUSANGULO\n");
}
if ($a * $a < ($b * $b + $c * $c))
{
    printf("TRIANGULO ACUTANGULO\n");
}
if ($a == $b && $b == $c)
{
    printf("TRIANGULO EQUILATERO\n");
}
else if ($a == $b || $a == $c || $b == $c)
{
    printf("TRIANGULO ISOSCELES\n");
}

?>
