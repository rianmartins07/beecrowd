#include <stdio.h>
#include <math.h>

int main(){
    long long int i, a, b, c;
    while(1){
        scanf("%lld", &a);
        if (a == 0){
            return 0;
        }
        scanf("%lld %lld", &b, &c);
        
        printf("%lld\n", (long long int) sqrt(a*b*100/c));
    }
}
