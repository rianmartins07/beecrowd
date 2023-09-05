#include <stdio.h>

void matriz(int n){
    unsigned short int i, j, x;
    
    for(i=1;i<=n;i++){
        for (j=1;j<=n;j++){
            x = i;
            if (j==i){
                x = 1;
            }
            if (i!=j && j > i){
                x = j-i+1;
            }
            if (i!=j && j < i){
                x = i - j + 1;
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