#include <stdio.h>

int main(){
    long long int e, i;
    scanf("%lld", &e);
    for(i=1;i<=e;i++){
        if (i%2 == 0){
        printf("%lld^2 = %lld\n", i, i*i);
        }
    }
}