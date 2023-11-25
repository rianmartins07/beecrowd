<?php
function qtdalgarismoo ($n){
    $digitCount = strlen((string)$n);
    return $digitCount;
}

function matriz ($n){
    $x = 0;
    $big = qtdalgarismoo(intval(pow(2,(2*$n-2))));
    for($i=0;$i<$n;$i++){
        for ($j=0;$j<$n;$j++){
            if ($j == 0){
                printf("%*d", $big, pow(2, $x+$j));

            }else{
                printf(" %*d", $big, pow(2, $x+$j));
            }

        }
        printf("\n");
        $x+=1;
    }
    printf("\n");
}

while (1){
    $n = intval(fgets(STDIN));
    if ($n != 0){
        matriz($n);
    }else{
        break;
    }
}

?>