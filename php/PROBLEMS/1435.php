<?php

function matriz ($n){
    for ($i=1;$i<=$n;$i++){
        for ($j=1;$j<=$n;$j++){
            $x = $i;
            if ($j<$x){
                $x = $j;
            }
            if ($n-$i+1 < $x){
                $x = $n-$i+1;
            }
            if ($n-$j+1 < $x){
                $x = $n-$j+1;
            }
            if ($j!=$n){
                printf("%3d ", $x);
            }else{
                printf("%3d", $x);
            }
        }
        printf("\n");
    }
    printf("\n");
}


while (1){
    $n = intval(fgets(STDIN));
    if ($n!=0){
        matriz($n);
    }else{
        break;
    }
}

?>