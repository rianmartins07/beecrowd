#include <stdio.h>
void printImpar(int impar[], int x);
void printPar(int par[], int j);
int main()
{
    int par[5], impar[5], i, x=0, j = 0, y;
    for (i = 0; i < 15; i++)
    {
        scanf("%d", &y);
        if (y % 2 == 0){
            par[j] = y;
            j++;
        }
        else{
            impar[x] = y;
            x++;
        }
        if (x==5){
            printImpar(impar, x);
            x=0;
            int impar[5];
        }
        if (j==5){
            printPar(par, j);
            j=0;
            int par[5];
        }
    }
    if (x>0){
        printImpar(impar, x);
    }
    if (j>0){
        printPar(par, j);
    }
}

void printImpar(int impar[], int x){
    int i;
    for(i=0;i<x;i++){
        printf("impar[%d] = %d\n", i, impar[i]);
    }
}
void printPar(int par[], int j){
    int i;
    for(i=0;i<j;i++){
        printf("par[%d] = %d\n", i, par[i]);
    }
}