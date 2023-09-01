#include <stdio.h>

int main(){
    int i, n[10], j;
    scanf("%d", &j);
    for(i=0;i<10;i++){
        printf("N[%d] = %d\n", i, j);
        j*=2;
    }
}