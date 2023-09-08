#include <stdio.h>

int main(){
    long long int n, i, x, y;
    scanf("%lld", &n);
    for(i=0;i<n;i++){
        scanf("%lld %lld", &x, &y);
        printf("%lld\n", x+y);
    }
}