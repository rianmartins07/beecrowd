
e = input().split(' ')
a = int(e[0])
b = int(e[1])
c = int(e[2])
d = int(e[3])

if b > c and d > a and (c+d) > (a+b) and c > 0 and d > 0 and a%2==0:
    print("Valores aceitos")
else:
    print("Valores nao aceitos")
    

