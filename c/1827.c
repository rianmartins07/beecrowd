#include <stdio.h>
#include <math.h>
void matriz(int n);
void matriz(int n){
    int i, j, x;


    for(i=0;i<n;i++){
        for (j=0;j<n;j++){
            if (i==j && (i < n/3 || i >= n-n/3 )){
                printf("2");
            }else if(i+j == n-1 && (i < n/3 || i >= n-n/3 )){
                printf("3");
            }else if (i+j+1 == n && i==j){
                printf("4");
            }else if (i >= n/3 && i < n-n/3 && j >= n/3 && j < n-n/3){
                printf("1");
            }else{
                printf("0");
            }

        }
        printf("\n");

    }
    printf("\n");
}


int main(){
    int n;
    while (scanf("%d", &n) != EOF){
        matriz(n);
    }
}