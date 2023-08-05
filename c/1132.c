#include <stdio.h>


int main(){
    int x, y, aux;

    scanf("%d %d", &x, &y);

    if (x>y){
        aux = x;
        x = y;
        y = aux;
    }
    int cont=0;
    for (int i=x;i<=y;i++){
        if (i%13!=0){
            cont+=i;
        }
    }
    printf("%d\n", cont);
}