<?php
$linha = fgets(STDIN);
$linha = $linha;
$valores = explode(' ', $linha);
$x1 = $valores[0];
$y1 = $valores[1];

$linha2 = fgets(STDIN);
$linha2 = $linha2;
$valores = explode(' ', $linha2);
$x2 = $valores[0];
$y2 = $valores[1];

echo round(pow((pow(($x2 - $x1),2)) + (pow(($y2 - $y1), 2)), 0.5), 4) . PHP_EOL;

?>