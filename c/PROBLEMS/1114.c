#include <stdio.h>

int main(){
    while (1){
        int e;
        scanf("%d", &e);
        if (e!=2002){
            printf("Senha Invalida\n");
        }else{
            printf("Acesso Permitido\n");
            break;
        }
    }
}