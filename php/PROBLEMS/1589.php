<?php
    $n = fgets(STDIN);
    
    for($i=0;$i<$n;$i++){
        $e = explode(' ', fgets(STDIN));
        $x = intval($e[0]);
        $y = intval($e[1]);
        
        printf("%d\n", $x+$y);
    }
?>