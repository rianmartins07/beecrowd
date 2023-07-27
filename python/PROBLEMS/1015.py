e = input().split(' ')
x1 = float(e[0])
y1 = float(e[1])
e = input().split(' ')
x2 = float(e[0])
y2 = float(e[1])

print('{:.4f}'.format(pow((pow (x2-x1, 2)) + (pow (y2-y1, 2)), 0.5)))
