n = int(input())

aux = 1
k = 0

for i in range(0, n):
    if i<n-1:
        print(k, end=' ')
    else:
        print(k)
    if i>=1:
        z = aux
        aux+=k
        k=z
    else:
        k=aux