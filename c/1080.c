#include <stdio.h>
int main(){
    long long int i, e, max, pos;
    scanf("%lld", e);
    max = e;
    pos = 0;
    for(i=1;i<100;i++){
        scanf("%lld", &e);
        if(e>max){
            max = e;
            pos = i;
        }
    }
    printf("%lld\n%lld\n", max, pos+1);
    
}