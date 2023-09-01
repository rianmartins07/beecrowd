#include <stdio.h>

void perfeito(long long int n);

int main() {
    long long int i, n, x;
    scanf("%lld", &n);
    for (i = 0; i < n; i++) {
        scanf("%lld", &x);
        perfeito(x);
    }

    return 0;
}

void perfeito(long long int n) {
    long long int i = 1, cont = 0;
    while (i < n) {
        if (n % i == 0) {
            cont += i;
        }
        i++;
    }
    if (cont == n) {
        printf("%lld eh perfeito\n", n);
    } else {
        printf("%lld nao eh perfeito\n", n);
    }
}