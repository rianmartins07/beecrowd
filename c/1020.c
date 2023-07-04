#include <stdio.h>

int main(){
    double e;
    scanf ("%lf", &e);
    int a = (int) e/365;
    e -= a*365;
    int m = (int) e/30;
    e -= m*30;
    printf("%d ano(s)\n", a);
    printf("%d mes(es)\n", m);
    printf("%.0lf dia(s)\n", e);
}