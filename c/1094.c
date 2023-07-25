#include <stdio.h>
#include <string.h>
int main(){
    float n, i, e, total, s = 0, c=0, r=0;
    char a;
    scanf("%f", &n);
    for(i=0;i<n;i++){
        scanf("%f %c", &e, &a);
        if (a == 'C'){
            c+=e;
        }else if (a == 'S'){
            s+=e;
        }else{
            r+=e;
        }
    }
    total+=c+s+r;
    printf("Total: %.0f cobaias\n", total);
    printf("Total de coelhos: %.0f\n", c);
    printf("Total de ratos: %.0f\n", r);
    printf("Total de sapos: %.0f\n", s);
    printf("Percentual de coelhos: %.2f %%\n", (c*100)/total);
    printf("Percentual de ratos: %.2f %%\n", (r*100)/total);
    printf("Percentual de sapos: %.2f %%\n", (s*100)/total);
}