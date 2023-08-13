#include <stdio.h>

int main(){
    double i, s;
    s = 0;
    for (i=1;i<=100;i++){
        s += 1/i;
    }
    printf("%.2lf\n", s);
}