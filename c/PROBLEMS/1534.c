#include <stdio.h>

void matriz(int n){
    unsigned short int i, j, x;
    
    for(i=1;i<=n;i++){
        for (j=1;j<=n;j++){
            x = 3;
            if (j==i){
                x = 1;
            }
            if (i+j == n+1){
                x=2;
            }
            printf("%hd", x);
        }
        printf("\n");
    }
}


int main(){
    int n;
    while (scanf("%d", &n) != EOF){
        matriz(n);
    }
}