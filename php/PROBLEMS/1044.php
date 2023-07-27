
<?php
    $e = fgets(STDIN);
    $e = explode(' ', $e);
    $a = $e[0];
    $b = $e[1];
    

    if ($b%$a == 0 || $a%$b == 0){
        printf("Sao Multiplos\n");
    }else{
        printf("Nao sao Multiplos\n");
    }
?>