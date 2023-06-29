a = input().split(' ')

res = int(a[1])*float(a[2])
b = input().split()
res2 = int(b[1])*float(b[2])
print("VALOR A PAGAR: R$ {:.2f}".format(res+res2))