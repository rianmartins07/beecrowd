#include <stdio.h>

int main(){
    int a, n, i, r=0;

    scanf("%d %d", &a, &n);
    if (n<=0){
        while(1){
            scanf("%d", &n);
            if (n>0){
                break;
            }
        }
    }

    for (i=0;i<n;i++){
        r+=a;
        a++;
    }
    printf("%d\n", r);

}