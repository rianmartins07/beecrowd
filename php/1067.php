<?php
$e = fgets(STDIN);
$e = intval($e);
for ($i=0;$i<=$e;$i++){
    if ($i%2 != 0){
        printf("%d\n", $i);
    }
}


?>