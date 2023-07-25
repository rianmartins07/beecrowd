<?php
$e = intval(fgets(STDIN));
$dict = array(
    "C"=> 0,
    "R"=> 0,
    "S"=> 0,
);
for ($i=0;$i<$e;$i++){
    $n = explode(' ', trim(fgets(STDIN)));
    $dict[strval($n[1])] += intval($n[0]);
}
$total = array_sum(array_values($dict));
printf("Total: %d cobaias\n", $total);
printf("Total de coelhos: %d\n", $dict["C"]);
printf("Total de ratos: %d\n", $dict["R"]);
printf("Total de sapos: %d\n", $dict["S"]);
printf("Percentual de coelhos: %.2f %%\n", ($dict["C"]*100)/$total);
printf("Percentual de ratos: %.2f %%\n", ($dict["R"]*100)/$total);
printf("Percentual de sapos: %.2f %%\n", ($dict["S"]*100)/$total);

?>