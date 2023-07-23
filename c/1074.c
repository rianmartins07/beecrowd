#include <stdio.h>
#include <string.h>

int main()
{
    int i, e, x;
    char str[80];
    scanf("%d", &e);

    for (i = 0; i < e; i++)
    {
        scanf("%d", &x);
        str[0] = '\0'; 

        if (x == 0)
        {
            printf("NULL\n");
        }
        else
        {
            if (x % 2 == 0)
            {
                strcat(str, "EVEN");
            }
            else
            {
                strcat(str, "ODD");
            }

            if (x > 0)
            {
                strcat(str, " POSITIVE");
            }
            else
            {
                strcat(str, " NEGATIVE");
            }
            printf("%s\n", str);
        }
    }
    return 0;
}
