<?php
    $e = fgets(STDIN);
    $e = explode(' ', $e);
    $e = array_map('intval', $e);
    $e2 = $e;
    sort($e);

    foreach($e as $i){
        printf ("%d\n", $i);
    }
    printf("\n");

    foreach($e2 as $i){
        printf("%d\n", $i);
    }
?>