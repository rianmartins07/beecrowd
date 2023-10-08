a, b, c, d = list(map(int, input().split(' ')))

if a + b > c and a + c > b and c + b > a:
    print("S")
elif a + b > d and a + d > b and b + d > a:
    print("S")
elif a+c > d and d + a > c and c + d > a:
    print("S")
elif b+c > d and b + d > c and c + d > b:
    print("S")
else:
    print("N")
