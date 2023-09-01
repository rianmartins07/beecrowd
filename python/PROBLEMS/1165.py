t = int(input())

for i in range (1,t+1):
    result=0
    numero = int(input())
    for j in range (1, numero+1):
        if numero%j == 0:
            result += 1
    if result == 2:
        print(numero, "eh primo")
    else :
        print(numero, "nao eh primo")