<?php
$e = explode(' ', fgets(STDIN));
$x = intval($e[0]);
$y = intval($e[1]);

for($i=1;$i<=$y;$i++){
    printf("%d", $i);
    if ($i%$x == 0){
        printf("\n");
    }else{
        printf(" ");
    }
}

?>
