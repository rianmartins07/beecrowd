while True:
    try:
        N = int(input())

        matriz = [[0] * N for _ in range(N)]

        for i in range(N):
            matriz[i][i] = 2


        for i in range(N):
            matriz[i][N - 1 - i] = 3

        for i in range(N//3, N - N//3):
            for j in range(N//3, N - N//3):
                matriz[i][j] = 1

        matriz[N//2][N//2] = 4

        for i in range(N):
            for j in range(N):
                print(matriz[i][j], end="")
            print()

        print()

    except EOFError:
        break
