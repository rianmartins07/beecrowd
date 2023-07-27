e = float(input())

if (e <= 400):
    r = e*0.15
    p=15

elif (e <= 800):
    r = e*0.12
    p = 12
elif (e <= 1200):
    r = e*0.10
    p=10
elif (e <= 2000):
    r = e*0.07
    p=7
elif (e > 2000):
    r = e*0.04
    p=4


print("Novo salario: {:.2f}".format(e+r, 2))
print("Reajuste ganho: {:.2f}".format(r,2))
print("Em percentual: {:.0f} %".format(p))
