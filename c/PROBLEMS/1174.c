#include <stdio.h>

int main(){
    double x[100];
    int i;
    for(i=0;i<100;i++){
        scanf("%lf", &x[i]);
    }
    for(i=0;i<100;i++){
        if (x[i]<=10){
            printf("A[%d] = %.1lf\n", i, x[i]);
        }
    }
}