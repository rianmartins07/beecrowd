def matriz (n):
    for i in range(1, n+1):
        for j in range(1, n+1):
            x = i
            if (j==i):
                x = 1
            
            if (i!=j and j > i):
                x = j-i+1
            
            if (i!=j and j < i):
                x = i - j + 1
            
            if j!=n:
                print(f"{x:3} ", end='')
            else:
                print(f"{x:3}", end='')
        print()
    print()

if __name__:
    while (1):
        n = int(input())
        if n !=0 :
            matriz(n)
        else:
            break