#include <stdio.h>

int main(){
    int n, i, x, j;
    scanf("%d", &n);
    for (i=0;i<n;i++){
        int cont=1;
        scanf("%d", &x);
        for (j=2;j<=x;j++){
            if (x%j==0){
                cont+=1;
            }
        }
        if (cont>2){
            printf("%d nao eh primo\n", x);
        }else{
            printf("%d eh primo\n", x);
        }
    }
}