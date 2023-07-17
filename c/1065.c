#include <stdio.h>

int main(){

    int e, i, cont=0;
    for (i=0;i<5;i++){
        scanf("%d", &e);
        if (e%2==0){
            cont++;
        }
    }
    printf("%d valores pares\n", cont);
}