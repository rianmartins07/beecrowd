#include <stdio.h>

int main(){
    double e, cont=0;

    for (int i=0;i<6;i++){
        scanf("%lf", &e);
        if (e>0){
            cont++;
        }
    }
    printf("%.0lf valores positivos\n", cont);
}