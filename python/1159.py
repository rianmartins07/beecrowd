def soma (n):
    cont = 0
    for i in range(0, 10):
        if n%2==0:
            cont+=n
        n+=1
    return cont


if __name__:
    n = int(input())
    while (n!=0):
        print(soma(n))
        n = int(input())