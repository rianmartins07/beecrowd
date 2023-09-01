#include <stdio.h>
#include <string.h>
int main(){
    double m[12][12], soma=0;
    int i, j, l;
    char s;

    scanf("%d %c", &l, &s);
    for (i=0;i<12;i++){
        for (j=0;j<12;j++){
            scanf("%lf", &m[i][j]);
        }
    }
    if (s == 'S') {
        i=l;
        while (i==l){
            for (j=0;j<12;j++){
                soma+=m[j][i];
            }
            i++;
        }
        printf("%.1lf\n", soma);
    } else if (s == 'M') {
        i=l;
        while (i==l){
            for (j=0;j<12;j++){
                soma+=m[j][i];
            }
            i++;
        }
        printf("%.1lf\n", soma/12);
    }
}