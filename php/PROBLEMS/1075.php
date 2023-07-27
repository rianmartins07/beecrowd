<?php
$e = intval(fgets(STDIN));

for($i=0;$i<10*1000;$i++){
    if ($i%$e==2){
        printf("%d\n", $i);
    }
}
?>