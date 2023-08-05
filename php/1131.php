<?php
$i=0;
$g=0;
$ci=0;
$cg=0;
$q=0;
$e=0;
$qgren=0;
while (1){
    $x =array_map(function ($x){
        return intval($x);
    }, explode(' ', fgets(STDIN)));
    $i = $x[0];
    $g = $x[1];
    if ($i>$g){
        $ci++;
    }else if ($i<$g){
        $cg++;
    }else{
        $e++;
    }
    $qgren++;
    printf("Novo grenal (1-sim 2-nao)\n");
    $ngre = intval(fgets((STDIN)));
    if ($ngre==2){
        printf("%d grenais\n", $qgren);
        printf("Inter:%d\n", $ci);
        printf("Gremio:%d\n", $cg);
        printf("Empates:%d\n", $e);
        if ($ci>$cg){
            printf("Inter venceu mais\n");
        }else if ($ci<$cg){
            printf("Gremio venceu mais\n");
        }else{
            printf("Nao houve vencedor\n");
        }
        break;
    }
}
?>