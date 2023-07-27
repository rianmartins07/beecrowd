#include <stdio.h>

int main(){

    double e, j=0;
    scanf("%lf", &e);
    if (e<=2000){
    printf("Isento");
    return 0;
    }
    if(e<=3000){
        j = (e-2000)*0.08;
    }
    else if( e<=4500){
        j = (1000*0.08) +(e-3000)*0.18;
    }
    else if(e > 4500){
        j = (1000*0.08) +((1500)*0.18)+((e-4500)*0.28);
    }

    printf("R$ %.2f\n", j);
}