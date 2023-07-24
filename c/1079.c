#include <stdio.h>

int main(){
    int e, i;
    double a, b, c;

    scanf("%d", &e);

    for (i=0;i<e;i++){
        scanf("%lf %lf %lf", &a,&b,&c);
        printf("%.1lf\n", (a*2 + b*3 + c*5)/10);
    }
}