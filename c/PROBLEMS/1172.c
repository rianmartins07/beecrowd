#include <stdio.h>
int verifica(int n);
int main(){
    int i, x[10], j;

    for (i=0;i<10;i++){
        scanf("%d", &j);
        x[i] = verifica(j);
    }

    for (i=0;i<10;i++){
        printf("X[%d] = %d\n",i, x[i]);
    }}

int verifica(int n){
    if (n<=0){
        return 1;
    }else{
        return n;
    }
}