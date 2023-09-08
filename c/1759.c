#include <stdio.h>

int main(){
    long long int n, i;
    scanf("%lld", &n);

    for (i=0;i<n;i++){
        if (i<n-1){
            printf("Ho ");
        }else{
            printf("Ho!\n");
        }
    }

}