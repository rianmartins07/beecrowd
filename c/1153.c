#include <stdio.h>


int fatorial(int n);

int main(){
    int n, aux=1, i;
    scanf("%d", &n);
    aux = fatorial(n);
    // for(i=1;i<=n;i++){
    //     aux *= i;
    // }
    printf("%d\n", aux);
}

int fatorial(int n){
    if (n<=1){
        return 1;
    }else{
    return n*fatorial(n-1);
    }
}