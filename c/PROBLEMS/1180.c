#include <stdio.h>

int main(){
    int i, n;
    scanf("%d", &n);
    int x[n];

    scanf("%d", &x[0]);
    int pos = 0, menor = x[0];
    for (i=1;i<n;i++){
        scanf("%d", &x[i]);
        if (x[i]<menor){
            menor = x[i];
            pos = i;
        }
    }
    printf("Menor valor: %d\n", menor);
    printf("Posicao: %d\n", pos);
}