#include <stdio.h>


int main(){
    int i, x[20];

    for (i=0;i<20;i++){
        scanf("%d", &x[i]);
    }
    for(i=0;i<20;i++){
        printf("N[%d] = %d\n", i, x[19-i]);
    }
}