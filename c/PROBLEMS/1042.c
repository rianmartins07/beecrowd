#include <stdio.h>
#include <stdlib.h>

int comparar(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

int main(){
    int e[3], e2[3];
    
    for (int i=0;i<3;i++){
        scanf("%d", &e[i]);
        e2[i]=e[i];
    }
    
    qsort(e, 3, sizeof(int), comparar);

    for(int i=0;i<3;i++){
        printf("%d\n", e[i]);
    }
    printf("\n");
    for(int i=0;i<3;i++){
        printf("%d\n", e2[i]);
    }

}