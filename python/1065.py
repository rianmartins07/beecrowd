cont = 0
for i in range(0, 5):
    e = int(input())
    if e%2==0:
        cont+=1

print("{:d} valores pares".format(cont))