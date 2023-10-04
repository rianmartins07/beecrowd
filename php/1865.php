<?php

$n = intval(fgets(STDIN));
for($i=0;$i<$n;$i++){
    $n = trim(fgets(STDIN));
    if ($n[0]=='T' && $n[1]=='h' && $n[2]=='o' && $n[3]=='r'){
        printf ("Y\n");
    }else{
        printf ("N\n");
    }
}
?>