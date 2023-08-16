#include <stdio.h>

int main(){
    int n, i, x, y;
    scanf("%d", &n);

    for (i=0;i<n;i++){
        int cont=0;
        scanf("%d %d", &x, &y);
        for (int j=0;j<y*2;j++){
            if (x%2 != 0){
                cont+=x;
            }
            x++;
        }
        printf("%d\n", cont);
    }

}