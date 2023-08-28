#include <stdio.h>

long long int fibonnaci(int x){
    long long int i, z=1, aux, r=0;

    for (i=0;i<x;i++){
        aux = z;
        z += r;
        r = aux;
    }
    return r;
}

int main(){
    int n, i, x;

    scanf("%d", &n);

    for(i=0;i<n;i++){
        scanf("%d", &x);
        printf("Fib(%d) = %lld\n", x,fibonnaci(x));
    }
}