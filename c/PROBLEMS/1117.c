#include <stdio.h>


int main(){
    float i=0, x, cont;
    while (1){
        scanf("%f", &x);

        
        if (x>=0 && x<=10){
            cont+=x;
            i++;
        }else{
            printf("nota invalida\n");
        }
        if (i==2){
            printf("media = %.2f\n", cont/2);
            break;
        }
    }
}