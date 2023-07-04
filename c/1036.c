#include <stdio.h>
#include <math.h>
int main(){
    double a, b, c;

    scanf("%lf %lf %lf", &a, &b, &c);

    double delta = pow(b,2)-(4 * a * c);

    if ((delta < 0) || (a <=0)){
        printf("Impossivel calcular\n");
    }
    else{
        printf("R1 = %.5f\n", ((-b + pow(delta, 0.5))/(2*a)));
        printf("R2 = %.5f\n", ((-b - pow(delta, 0.5))/(2*a)));
    }
}