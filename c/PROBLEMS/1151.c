#include <stdio.h>

int main(){
    int n, i, aux=1, k=0, z;

    scanf("%d", &n);

    for (i=0;i<n;i++){
        if (i<n-1){
            printf("%d ", k);
        }else{
            printf("%d\n", k);
        }
        if (i>=1){
            z = aux;
            aux+=k;
            k=z;
        }else{
            k=aux;
        }
    }
}