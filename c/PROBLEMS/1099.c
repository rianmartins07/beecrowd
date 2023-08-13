#include <stdio.h>

int main(){

    int n;
    scanf("%d", &n);

    for (int i=0;i<n;i++){
        int x,y,cont = 0, aux;
        scanf("%d %d", &x, &y);
        if (y>x){
            aux = y;
            y=x;
            x=aux;
        }
        for (int i=y+1;i<x;i++){
            if (i%2 != 0){
                cont+=i;
            }
        }
        printf("%d\n", cont);
    }
}