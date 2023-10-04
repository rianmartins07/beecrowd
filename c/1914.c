
#include <stdio.h>
#include <string.h>

int main()
{
    int n, x, i;
    scanf("%d", &n);
    for (i=0;i<n;i++){
        char n1[30], n2[30], r1[10], r2[10];
        scanf("%s %s %s %s", n1, r1, n2, r2);
        int v1, v2, res;
        scanf("%d %d", &v1, &v2);
        res = v1+v2;
        
        if (res%2==0){
            if(strcmp("PAR", r1) == 0){
                printf("%s\n", n1);
            }else{
                printf("%s\n", n2);
            }
        } else{
            if(strcmp("IMPAR", r1) == 0){
                printf("%s\n", n1);
            }else{
                printf("%s\n", n2);
            }
        }
    }
}
