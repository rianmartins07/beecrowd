<?php

function matriz($n) {
    for($i=0;$i<$n;$i++){
        for($j=0;$j<$n;$j++){
            $m[$i][$j] = 0;
        }
    }
    for($i=0;$i<$n;$i++){
        $m[$i][$i] = 2;
    }
    for($i=0;$i<$n;$i++){
        $m[$i][$n-1-$i] = 3;
    }

    for($i=intval($n/3);$i<$n-intval($n/3);$i++){
        for($j=intval($n/3);$j<$n - intval($n/3);$j++){
            $m[$i][$j] = 1;
        }
    }
    $m[intval($n/2)] [intval($n/2)]=4;
    for($i=0;$i<$n;$i++){
        for($j=0;$j<$n;$j++){
            printf("%d", $m[$i][$j]);
        }
        printf("\n");
    }
    printf("\n");

}

while (true) {
    $line = fgets(STDIN);
    if ($line === false || trim($line) === "") {
        break;
    }

    $n = intval($line);
    matriz($n);
}
?>
