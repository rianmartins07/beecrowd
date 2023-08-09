<?php
    $n = intval(fgets(STDIN));
    $x = 1;
    for ($i=0;$i<$n;$i++){
        printf("%d %d %d PUM\n", $x, $x+1, $x+2);
        $x+=4;
    }

?>