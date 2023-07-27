#include <stdio.h>

int main(){
    int e, i, par=0, imp=0, pos=0, neg=0;
    for (i=0;i<5;i++){
        scanf("%d", &e);
        if (e%2 == 0){
            par++;
        }else {
            imp++;
        }
        if(e > 0){
            pos++;
        }else if (e < 0){
            neg++;
        }
    }
    printf("%d valor(es) par(es)\n", par);
    printf("%d valor(es) impar(es)\n", imp);
    printf("%d valor(es) positivo(s)\n", pos);
    printf("%d valor(es) negativo(s)\n", neg);
}