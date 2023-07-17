<?php
$cont = 0;
for($i=0;$i<5;$i++){
    $e = fgets(STDIN);
    if ($e%2==0){
        $cont++;
    }
}
printf("%d valores pares\n", $cont);
?>
