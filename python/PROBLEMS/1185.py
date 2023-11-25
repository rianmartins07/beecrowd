s = str(input())
matriz = []
for i in range(0,12):
    linha = []
    for j in range(0,12):
        linha.append(float(input()))
    matriz.append(linha)
soma = 0

for i in range(0,12):
    for j in range(0,12):
        if j+i<=10:
            soma+=matriz[i][j]
if s=='S':
    print(f"{soma:.1f}")
elif s=='M':
    soma/=66
    print(f"{soma:.1f}")