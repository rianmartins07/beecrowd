#include <stdio.h>

int main(){
    double e;
    scanf("%lf", &e);
    int a = (int) (e*100);
    printf ("NOTAS:\n");

    printf ("%d nota(s) de R$ 100.00\n", (int)a/10000);
    a -= (((int)a/10000)*10000);
    printf ("%d nota(s) de R$ 50.00\n", (int)a/5000);
    a -= (((int)a/5000)*5000);
    printf ("%d nota(s) de R$ 20.00\n", (int)a/2000);
    a -= (((int)a/2000)*2000);
    printf ("%d nota(s) de R$ 10.00\n", (int)a/1000);
    a -= (((int)a/1000)*1000);
    printf ("%d nota(s) de R$ 5.00\n", (int)a/500);
    a -= (((int)a/500)*500);
    printf ("%d nota(s) de R$ 2.00\n", (int)a/200);
    a -= (((int)a/200)*200);

    printf("MOEDAS:\n");
    printf ("%d moeda(s) de R$ 1.00\n", (int)a/100);
    a -= (((int)a/100)*100);
    printf ("%d moeda(s) de R$ 0.50\n", (int)a/50);
    a -= (((int)a/50)*50);
    printf ("%d moeda(s) de R$ 0.25\n", (int)a/25);
    a -= (((int)a/25)*25);
    printf ("%d moeda(s) de R$ 0.10\n", (int)a/10);
    a -= (((int)a/10)*10);
    printf ("%d moeda(s) de R$ 0.05\n", (int)a/5);
    a -= (((int)a/5)*5);
    printf ("%d moeda(s) de R$ 0.01\n", (int)a/1);
    a -= (((int)a/1)*1);
    
}