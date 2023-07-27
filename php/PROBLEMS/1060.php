<?php
$cont = 0;
for($i=0;$i<6;$i++){
    $e = fgets(STDIN);
    if ($e > 0){
        $cont++;
    }
}
printf("%d valores positivos\n", $cont);

?>