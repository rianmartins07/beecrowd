#include <stdio.h>

int main(){
    double e, e1;
    scanf("%lf %lf", &e, &e1);

    if (e == 1){
        e = 4.0;
    }
    else if (e == 2){
        e = 4.5;
    }
    else if (e == 3){
        e = 5.0;
    }
    else if (e == 4){
        e = 2;
    }
    else{
        e = 1.5;
    }
    
    printf("Total: R$ %.2f\n", e*e1);
}