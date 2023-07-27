#include <stdio.h>

int main(){
    double e, p, r;
    scanf ("%lf", &e);
    if (e <= 400){
        r = e*0.15;
        p=15;
    }
    else if (e <= 800){
        r = e*0.12;
        p = 12;
    }else if (e <= 1200){
        r = e*0.10;
        p=10;
    }else if (e <= 2000){
        r = e*0.07;
        p=7;
    }else if (e > 2000){
        r = e*0.04;
        p=4;
    }

    printf("Novo salario: %.2lf\n",e+r);
    printf("Reajuste ganho: %.2lf\n",r);
    printf("Em percentual: %.0lf %%", p);
    printf("\n");

}
