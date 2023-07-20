#include <stdio.h>

int main(){
    int i, e;
    scanf("%d", &e);

    for(i=e;i<e+12;i++){
        if (i%2!=0){
            printf("%d\n", i);
        }

    }
}