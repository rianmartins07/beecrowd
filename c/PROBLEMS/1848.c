#include <stdio.h>
#include <string.h>
#include <math.h>

int main() {
    char p[100]; // Aumente o tamanho do array para acomodar strings maiores
    int i, res = 0, mega = 0;

    while (1) {

        scanf(" %[^\n]", p); // Adicione um espaço antes de %[^\n] para lidar com o espaço em branco inicial

        if (strlen(p) > 3) {
            printf("%d\n", mega);
            res += 1;
            mega = 0;
        }
        
        if (res == 3) {
            break;
        } else {
            for (i = 0; i < strlen(p); i++) {
                if (p[i] == '*') { // Use p[i] diretamente para verificar o caractere '*'
                    mega += pow(2,(strlen(p)-i-1));
                }
            }
        }
    }

    return 0;
}
