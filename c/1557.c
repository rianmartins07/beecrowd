#include <stdio.h>
#include <math.h>
int qtdalgarismoo (int n);
void matriz(int n);
void matriz(int n){
    int i, j, x;
    x=0;
    int big = qtdalgarismoo(pow(2,(2*n-2)));

    for(i=0;i<n;i++){
        for (j=0;j<n;j++){
            if (j == 0){
                printf("%*d", big, (int) pow(2, x+j));

            }else{
                printf(" %*d", big, (int) pow(2, x+j));
            }

        }
        printf("\n");
        x+=1;
    }
    printf("\n");
}

int qtdalgarismoo (int n){
    int digitos=0;
    do
    {

        n % 10;
        n = n/10;
        digitos++;

    } while (n > 0);
    return digitos;
}

int main(){
    while (1){
        int n;
        scanf("%d", &n);
        if (n != 0){
            matriz(n);
        }else{
            break;
        }
    }
}