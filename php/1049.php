<?php
$a = trim(fgets(STDIN));
$b = trim(fgets(STDIN));
$c = trim(fgets(STDIN));

if ($a == "vertebrado"){
    if ($b == "mamifero"){
        if ($c == "onivoro"){
            printf("homem\n");
        }else if ($c == "herbivoro"){
            printf("vaca\n");
        }
    }else if ($b == "ave"){
        if ($c == "carnivoro"){
            printf("aguia\n");
        }else if ($c == "onivoro"){
            printf("pomba\n");
        }
    }
}else if ($a == "invertebrado"){
    if ($b == "inseto"){
        if ($c == "hematofago"){
            printf("pulga\n");
        }else if ($c == "herbivoro"){
            printf("lagarta\n");
        }
    }else if ($b == "anelideo"){
        if ($c == "hematofago"){
            printf("sanguessuga\n");
        }else if ($c == "onivoro"){
            printf("minhoca\n");
        }
    }
}

?>