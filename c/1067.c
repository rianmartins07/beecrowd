#include <stdio.h>

int main(){
    int e,i;
    scanf("%d", &e);

    for (i=0;i<=e;i++){
        if (i%2!=0){
            printf("%d\n", i);
        }
    }
}