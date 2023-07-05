#include <stdio.h>

int main(){
    double e;
    scanf("%lf", &e);
    if (e >= 0){
        if (e <= 25){
            printf("Intervalo [0,25]\n");
        }
        else if (e <= 50){
            printf("Intervalo (25,50]\n");
        }
        else if (e <= 100){
            printf("Intervalo (75,100]\n");
        }
        else{
            printf("Fora de intervalo\n");
        }
    } else{
        printf("Fora de intervalo\n");
    }
}