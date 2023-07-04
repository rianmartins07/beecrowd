#include <stdio.h>

int main(){
    char name[81];
    double sal, v;
    scanf ("%s %lf %lf", &name, &sal, &v);
    printf("TOTAL = R$ %.2f\n", sal+(v*0.15));
}