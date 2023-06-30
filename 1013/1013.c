#include <stdio.h>

int max(int a, int b, int c){
   int max_value = a;

   if (b>max_value){
    max_value = b;
   }
   if (c>max_value){
    max_value = c;
   }
   
   return max_value;

}

int main(){
    int a, b, c;

    scanf ("%d %d %d", &a, &b ,&c);

    int resultado = max(a,b,c);
    printf("%d eh o maior\n", resultado);
    return 0;
}