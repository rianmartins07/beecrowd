#include <stdio.h>

int main(){
    double n, aux, cont=0;

    while(1){
        scanf("%lf", &n);
        if (n<0){
            printf("%.2lf\n", aux/cont);
            break;
        }
        aux+=n;
        cont++;
    }
}