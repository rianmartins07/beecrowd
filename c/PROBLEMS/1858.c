#include <stdio.h>

int main(){
    int n, i, x, aux, r;
    scanf("%d", &n);
    
    for (i=0;i<n;i++){
        scanf("%d",&x);
        if (i==0){
            aux = x;
            r = i;
        }
        if (x < aux){
            aux = x;
            r = i;
        }
    }
    printf("%d\n", r+1);

}