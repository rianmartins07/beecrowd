e = input().split(' ')

a =float(e[0])
b =float(e[1])
c =float(e[2])

delta = pow(b,2)-(4 * a * c)

if delta < 0 or a <=0:
    print("Impossivel calcular")
else:
    print("R1 = {:.5f}".format((-b + pow(delta, 0.5))/(2*a)))
    print("R2 = {:.5f}".format((-b - pow(delta, 0.5))/(2*a)))