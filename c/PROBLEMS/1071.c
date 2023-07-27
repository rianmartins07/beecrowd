#include <stdio.h>
int main(){
    int x, y, i, cont=0;
    scanf("%d %d", &x, &y);

    for (i=y+1;i<x;i++){
        if (i%2 != 0){
            cont+=i;
        }
    }
    printf("%d\n", cont);
}