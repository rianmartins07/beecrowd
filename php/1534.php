<?php

function matriz ($n){
    for ($i=1;$i<=$n;$i++){
        for ($j=1;$j<=$n;$j++){
            $x = 3;
            if ($j==$i){
                $x = 1;
            }
            if ($i+$j == $n+1){
                $x=2;
            }
            printf("%d", $x);
        }
        printf("\n");
    }
}


while (($n = fgets(STDIN)) !== false) {
    matriz($n);
}

?>