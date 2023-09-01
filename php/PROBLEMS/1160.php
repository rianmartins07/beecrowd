<?php
function anos($pa, $pb, $ca, $cb){
    $cont=0;
    while ($cont<100){
        $pa += intval($pa*($ca/100));
        $pb += intval($pb*($cb/100));
        $cont++;
        if ($pa > $pb){
            printf("%d anos.\n", $cont);
            break;
        }
        if ($cont>=100){
            printf("Mais de 1 seculo.\n");
        }
    }
}

$n = intval(fgets(STDIN));
for ($i=0;$i<$n;$i++){
    $e = explode(' ', fgets(STDIN));
    $pa = intval($e[0]);
    $pb = intval($e[1]);
    $ca = floatval($e[2]);
    $cb = floatval($e[3]);
    anos($pa, $pb, $ca, $cb);
}

?>