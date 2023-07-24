#include <stdio.h>

int main(){

    long long int e, i;

    scanf("%lld", &e);

    for (i=1;i<=10;i++){
        printf("%lld x %lld = %lld\n", i, e, e*i);
    }
}