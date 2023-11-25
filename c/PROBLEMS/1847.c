#include <stdio.h>

int main(){


    int a, b, c, r=0;
    scanf("%d %d %d", &a, &b, &c);
    if (a>b){
        if (b<c){
            r = 1;
        }
        if (a-b > b-c && b >= c){
            r = 1;
        }
    }
    if (b>a && b-a <= c-b){
        r=1;
    }
    if (a==b){
        if (b < c){;
            r=1;
        }
    }
    if (r==1){
        printf(":)\n");
    }else{
        printf(":(\n");
    }
}
