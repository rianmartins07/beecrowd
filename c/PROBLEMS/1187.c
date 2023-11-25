#include <stdio.h>
#include <string.h>
int main(){
    double m[12][12], soma=0;
    char s;
    int i, j;

    scanf("%c", &s);
    for (i=0;i<12;i++){
        for (j=0;j<12;j++){
            scanf("%lf", &m[i][j]);
        }
    }

    for (i=0;i<12;i++){
        for (j=0;j<12;j++){
            if (j+i <=10 && j>i && j!=i){
                soma+=m[i][j];
            }
        }
    }

    if (s=='S'){
        printf("%.1lf\n", soma);
    }else{
        printf("%.1lf\n", soma/30);
    }
}