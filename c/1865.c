#include <stdio.h>
#include <string.h>
int main() {


    int n, i, newtons;
    scanf ("%d", &n);
    char nome[255];
    for (i=0;i<n;i++){
        scanf (" %s", nome);
        scanf ("%d", &newtons);
        if (strcmp(nome, "Thor") == 0 || strcmp(nome, "thor") == 0 ){
            printf ("Y\n");
        }else{
            printf ("N\n");
        }
    }

}