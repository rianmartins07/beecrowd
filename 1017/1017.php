<?php
    $a = fgets(STDIN);
    $b = fgets(STDIN);

    $string = sprintf("%.3f", round(($a*$b)/12, 3)) ;
    echo $string . PHP_EOL


?>