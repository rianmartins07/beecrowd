#include <stdio.h>

int main(){

    int i, a, b, c, d;
    scanf("%d %d %d %d", &a, &b, &c, &d);
    if (a + b > c && a + c > b && c + b > a){
        printf("S\n");
    }else if (a + b > d && a + d > b && b + d > a) {
        printf("S\n");
    }else if (a+c > d && d + a > c && c + d > a){
        printf("S\n");
    }else if (b+c > d && b + d > c && c + d > b){
        printf("S\n");
    }else{
        printf("N\n");
    }
}