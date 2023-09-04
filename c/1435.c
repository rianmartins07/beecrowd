#include <stdio.h>

void matriz(int n){
    unsigned short int i, j, x;
    
    for(i=1;i<=n;i++){
        for (j=1;j<=n;j++){
            x = i;
            if (j<x){
                x = j;
            }
            if (n-i+1 < x){
                x = n-i+1;
            }
            if (n-j+1 < x){
                x = n-j+1;
            }
            if (j!=n){
                printf("%3hd ", x);
            }else{
                printf("%3hd", x);
            }

        }
        printf("\n");
    }
    printf("\n");
}


int main(){
    while (1){
        int n;
        scanf("%d", &n);
        if (n != 0){
            matriz(n);
        }else{
            break;
        }
    }
}