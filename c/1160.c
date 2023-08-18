#include <stdio.h>

void anos(int pa, int pb, double ca, double cb){
    int cont = 0;
    while (cont<100){
        pa += (int) pa*(ca/100);
        pb += (int) pb*(cb/100);
        cont++;
        if (pa > pb){
            printf("%d anos.\n", cont);
            break;
        }
        if (cont>=100){
            printf("Mais de 1 seculo.\n");
        }
    }


}

int main(){
    int i, pa, pb, n, a=0;
    double  ca, cb;
    scanf("%d", &n);
    for (i=0;i<n;i++){
        scanf("%d %d %lf %lf", &pa, &pb, &ca, &cb);
        anos(pa, pb, ca, cb);
    }

}