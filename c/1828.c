#include <stdio.h>
#include <string.h>
int main() {

    int n,i;
    char sheldon[81], raj[81];

    scanf ("%d", &n);

    for (i=0;i<n;i++){
        scanf ("%s", sheldon);
        scanf ("%s", raj);

        if (strcmp(sheldon, raj) == 0){
            printf("Caso #%d: De novo!\n", i+1);
        }else if (strcmp(sheldon, "tesoura") == 0 && strcmp(raj, "papel") == 0){
            printf("Caso #%d: Bazinga!\n", i+1);
        }else if (strcmp(sheldon, "tesoura") == 0 && strcmp(raj, "lagarto") == 0){
            printf("Caso #%d: Bazinga!\n", i+1);
        }else if (strcmp(sheldon, "papel") == 0 && strcmp(raj, "pedra") == 0){
            printf("Caso #%d: Bazinga!\n", i+1);
        }else if (strcmp(sheldon, "papel") == 0 && strcmp(raj, "Spock") == 0){
            printf("Caso #%d: Bazinga!\n", i+1);
        }else if (strcmp(sheldon, "pedra") == 0 && strcmp(raj, "tesoura") == 0){
            printf("Caso #%d: Bazinga!\n", i+1);
        }else if (strcmp(sheldon,"pedra") == 0 && strcmp(raj, "lagarto") == 0){
            printf("Caso #%d: Bazinga!\n", i+1);
        }else if (strcmp(sheldon, "Spock") == 0 && strcmp(raj, "pedra") == 0){
            printf("Caso #%d: Bazinga!\n", i+1);
        }else if (strcmp(sheldon, "Spock") == 0 && strcmp(raj, "tesoura") == 0){
            printf("Caso #%d: Bazinga!\n", i+1);
        }else if (strcmp(sheldon, "lagarto") == 0 && strcmp(raj, "Spock") == 0){
            printf("Caso #%d: Bazinga!\n", i+1);
        }else if (strcmp(sheldon, "lagarto") == 0 && strcmp(raj, "papel") == 0){
            printf("Caso #%d: Bazinga!\n", i+1);
        }else{
            printf("Caso #%d: Raj trapaceou!\n", i+1);
        }
    }
    return 0;
}
