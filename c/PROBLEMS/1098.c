#include <stdio.h>

int main(){
    float i=0, j=1, z=0;
    while (i<=2.2){
        while(z<3){
            if (j==1 || (j>1.9 && j<2.1) || (j>2.9 && j<3.1) || (j>3.9 && j<4.1) || i>1.9){
                printf("I=%.0f J=%.0f\n", i, j+z);
            }
            else{
                printf("I=%.1f J=%.1f\n", i, j+z);
            }
            z+=1;
        }
    i+=0.2;
    z=0;
    j+=0.2;
}
}