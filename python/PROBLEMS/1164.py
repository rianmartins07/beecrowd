def perfeito (n):
    i=1
    cont=0
    while (i < n):
        if (n % i == 0):
            cont += i
        i+=1
    
    if cont == n:
        print(f"{n} eh perfeito")
    else:
        print(f"{n} nao eh perfeito")
    



if __name__:
    n = int(input())
    for i in range(0, n):
        x = int(input())
        perfeito(x)