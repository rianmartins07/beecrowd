#include <stdio.h>

int main(){
    double a;
    scanf ("%lf", &a);
    int h = (int) a/3600;

    a -= ((int)a/3600)*3600;
    int m = (int)a/60;
    a -= ((int)a/60)*60;
    printf ("%d:%d:%.0lf\n", h,m,a);

}