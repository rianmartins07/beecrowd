<?php
$n = intval(fgets(STDIN));
$x=0;
for ($i=0;$i<1000;$i++){
    printf("N[%d] = %d\n", $i, $x);
    if ($x>$n-2){
        $x=0;
    }else{
        $x++;
    }
}
?>