#include <stdio.h>

int main()
{
    int i = 1, j = 7, z=7, y=0;
    while (i <= 9)
    {
        while (y < 3)
        {
            printf("I=%d J=%d\n", i, j);
                j--;
            y++;
        }
        y=0;
        j =z+2;
        z+=2;
        i += 2;
    }
}