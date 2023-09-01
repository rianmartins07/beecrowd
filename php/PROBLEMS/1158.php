<?php
$n = intval(fgets(STDIN));

for($i=0;$i<$n;$i++){
    $e = explode(' ', fgets(STDIN));
    $x = $e[0];
    $y = $e[1];
    $cont = 0;
    for ($j=0;$j<$y*2;$j++){
        if ($x%2 != 0){
            $cont+=$x;
        }
        $x++;
    }
    printf("%d\n", $cont);
}


?>