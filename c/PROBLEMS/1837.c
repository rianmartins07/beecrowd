#include <stdio.h>

int main(){
    int a, b, flag=0, r, i;
    scanf("%d %d", &a, &b);
    float quociente, x;
    if (a>=0){
        quociente = a/b;
        r = a-((int)(quociente))*b;
        printf("%d %d\n", (int) quociente, r);
    }else{
        if (b<0){
            x = b*(-1);
        }else{
            x=b;
        }
        for (i=0;i<x*9;i++){
            if (x*i >= a*(-1)){
                r = (x*i)-a*(-1);
                quociente = (x*i)/b;
                printf("%d %d\n", (int) quociente*(-1), r);
                break;
            }
        }
    }

}