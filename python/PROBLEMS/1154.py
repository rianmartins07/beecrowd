cont =0
aux = 0
while (1):
    n = float(input())
    if n<0:
        print("{:.2f}".format(aux/cont))
        break
    aux+=n
    cont+=1
