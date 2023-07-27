<?php
    $e = fgets(STDIN);
    $e = explode(' ', $e);
    $n1 = $e[0] * 2;
    $n2 = $e[1] * 3;
    $n3 = $e[2] * 4;
    $n4 = $e[3] * 1;
    $media = ($n1+$n2+$n3+$n4)/10;

    printf("Media: %.1f\n", $media);
    if ($media >= 7.0){
        printf("Aluno aprovado.\n");
    }
    else if ($media < 5.0){
        printf("Aluno reprovado.\n");
    }
    else{
        printf("Aluno em exame.\n");
        $n = fgets(STDIN);
        printf("Nota do exame: %.1f\n", $n);
        $media=($media+$n)/2;
        if ($media >= 5){
            printf("Aluno aprovado.\n");
        }
        else{
            printf("Aluno reprovado.\n");
        }
        printf("Media final: %.1f\n", $media);
    }
?>