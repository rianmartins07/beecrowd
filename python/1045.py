import sys
e = list(map(float, input().split(' ')))

e = sorted(e,reverse=True)

a = e[0]
b = e[1]
c = e[2]


if a >= b+c:
    print('NAO FORMA TRIANGULO')
    sys.exit()
if a**2 == b**2+c**2:
    print('TRIANGULO RETANGULO')
if a**2 > b**2+c**2:
    print('TRIANGULO OBTUSANGULO')
if a**2 < b**2+c**2:
    print('TRIANGULO ACUTANGULO')
if a == b and b == c:
    print('TRIANGULO EQUILATERO')
elif a == b or a == c or b == c:
    print('TRIANGULO ISOSCELES')