e = int(input())

for i in range(0, e):
    n = list(map(float, input().split(' ')))

    print("{:.1f}".format((n[0]*2 + n[1]*3 + n[2]*5)/10))