x = int(input())
z = int(input())

while z<=x:
    z = int(input())

aux = x
cont = 1

while (aux<z):
    aux+=x
    x+=1
    cont+=1
print(cont)
