#include <stdio.h>

int main(){
    int x, z, i;
    scanf("%d %d", &x, &z);

    while(z<=x){
        scanf("%d", &z);
    }
    int cont = 1, aux=x;
    while (aux<z){
        aux +=x;
        x+=1;
        cont++;
    }

    printf("%d\n", cont);

}