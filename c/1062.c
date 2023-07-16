    #include <stdio.h>

    int main(){

        double arr[6], pos=0;
        double t=0;
        for (int i=0;i<6;i++){
            scanf("%lf", &arr[i]);
            if (arr[i]>0){
                pos++;
                t+=arr[i];
            }
        }
        printf("%.0lf valores positivos\n", pos);
        printf("%.1lf\n",( t/pos));
        
    }