<?php

while (1){
    $n = intval(fgets(STDIN));
    if ($n==0){
        return;
    }
    for($i=1;$i<$n;$i++){

        printf("%d ", $i);
    }
    printf("%d\n", $i);

}

?>