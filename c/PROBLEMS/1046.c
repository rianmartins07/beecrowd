#include <stdio.h>

int main(){
    int i, f, result;
    scanf ("%d %d", &i, &f);

    if (i > f) {
        result = 24 - (i - f);
    } else if (i < f) {
        result = f - i;
    } else {
        result = 24;
    }
    printf("O JOGO DUROU %d HORA(S)\n", result);
}