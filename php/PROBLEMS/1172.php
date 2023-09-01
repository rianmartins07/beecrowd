<?php
function verifica ($n){
    if ($n<=0){
        return 1;
    }else{
        return $n;
    }
}
$x = [];
for ($i=0;$i<10;$i++){
    $x[$i] = verifica(intval(fgets(STDIN)));
}

for ($i=0;$i<10;$i++){
    printf("X[%d] = %d\n",$i, $x[$i]);
}


?>