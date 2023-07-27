<?php
$e = fgets(STDIN);
$e = explode(" ", $e);
$e = array_map('intval', $e);
$i = $e[0];
$f = $e[1];
if ($i > $f) {
    $result = 24 - ($i - $f);
} elseif ($i < $f) {
    $result = $f - $i;
} else {
    $result = 24;
}
printf("O JOGO DUROU %d HORA(S)\n", $result);
?>
