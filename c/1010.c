#include <stdio.h>

int main(){
    int a, b, a2, b2;
    double c, c2;

    scanf ("%d %d %lf", &a, &b, &c);
    scanf ("%d %d %lf", &a2, &b2, &c2);
    printf("VALOR A PAGAR: R$ %.2lf\n", (b*c) + (b2*c2));
}