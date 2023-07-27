#include <stdio.h>

int main()
{
    int n, e, i, d = 0, f = 0;
    scanf("%d", &n);

    for (i = 0; i < n; i++)
    {
        scanf("%d", &e);
        if (e >= 10 && e <= 20)
        {
            d++;
        }
        else
        {
            f++;
        }
    }
    printf("%d in\n", d);
    printf("%d out\n", f);
}