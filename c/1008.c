#include <stdio.h>

int main(){
    int a, b;
    double c;

    scanf("%d %d %lf", &a, &b, &c);
    printf("NUMBER = %d\nSALARY = U$ %.2lf\n",a, b*c);
}