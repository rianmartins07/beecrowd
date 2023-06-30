#include <stdio.h>
#include <math.h>

int main(){
    
    double a, pi=3.14159;

    scanf ("%lf", &a);
    printf("VOLUME = %.3lf\n", ((4.0/3.0) * pi * pow(a, 3)));

    return 0;
}