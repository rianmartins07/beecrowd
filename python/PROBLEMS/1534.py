def matriz (n):
    for i in range(1, n+1):
        for j in range(1, n+1):
            x = 3
            if (j==i):
                x = 1
            if i+j == n+1:
                x=2

            print(f"{x}", end='')

        print()


while (1):
    try:
        n = int(input())
        matriz(n)
    except EOFError:
        break
