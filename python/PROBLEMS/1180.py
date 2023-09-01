n = int(input())
x = input().split(' ')

pos = 0
menor = int(x[0])

for i in range(1, n):
    try:
        num = int(x[i])
        if num < menor:
            menor = num
            pos = i
    except ValueError:
        pass

print(f"Menor valor: {menor}")
print(f"Posicao: {pos}")
