#include <stdio.h>

int soma(int n){
    int cont = 0;
    for (int i =0;i<10;i++){
        if (n%2==0){
            cont+=n;
        }
        n++;
    }
    return cont;
}

int main(){
    int n, i;
    scanf("%d", &n);
    while(n!=0){
        
        printf("%d\n", soma(n));
        scanf("%d", &n);
    }
}