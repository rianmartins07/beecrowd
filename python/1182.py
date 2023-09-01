l = int(input())
s = str(input())
matriz = []
for i in range(0,12):
    linha = []
    for j in range(0,12):
        linha.append(float(input()))
    matriz.append(linha)
soma = 0
i=l

for j in range(0, 12):
    soma +=matriz[j][i]

if s=='S':
    print(f"{soma:.1f}")
elif s=='M':
    soma/=12
    print(f"{soma:.1f}")