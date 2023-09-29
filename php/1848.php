<?php
$mega = 0;
$res=0;
while(1){

    $p =  trim(fgets(STDIN));

    if (strlen($p) > 3) {
        printf("%d\n", $mega);
        $res += 1;
        $mega = 0;
    }
    
    if ($res == 3) {
        break;
    } else {
        for ($i = 0; $i < strlen($p); $i++) {
            if ($p[$i] == '*') { 
                $mega += pow(2,(strlen($p)-$i-1));
            }
        }
    }
}


?>
