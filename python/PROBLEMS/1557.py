def qtdalgarismoo (n):
    return len(str(n))



def matriz (n):
    x=0
    big = qtdalgarismoo(pow(2,(2*n-2)))
    for i in range(0, n):
        for j in range(0, n):
            if j==0:
                print("{:>{width}}".format(int(2 ** (x + j)), width=big), end="")
            else:
                print(" {:>{width}}".format(int(2 ** (x + j)), width=big), end="")
        print()
        x+=1
    print()

if __name__:
    while (1):
        n = int(input())
        if n !=0 :
            matriz(n)
        else:
            break