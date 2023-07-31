#include <stdio.h>

void funcao(int x, int y)
{
    int sum = 0, i;
    for (i = y; i <= x; i++)
    {
        printf("%d ", i);
        sum += i;
    }
    printf("Sum=%d\n", sum);
}

int main()
{
    while (1)
    {
        int x, y, aux;
        scanf("%d %d", &x, &y);
        if (y > x)
        {
            aux = y;
            y = x;
            x = aux;
        }
        if (x <= 0 || y <= 0)
        {
            break;
        }
        funcao(x, y);
    }
}
