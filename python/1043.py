e = list(map(float, input().split(' ')))
a, b, c = e[0], e[1], e[2]

if a+b > c and a+c > b and b+c > a:
    perimetro = a + b + c
    print(f"Perimetro = {perimetro:.1f}")
else:
    area = ((a + b) * c) / 2
    print(f"Area = {area:.1f}")