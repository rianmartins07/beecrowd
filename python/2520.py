x, y = list(map(int, input().split()))

mx, my = 0, 0
yx, yy = 0, 0
m=[]
for i in range(x):
    z=[]
    for j in range(y):
        z.append(input().split(' '))
    m.append(z)

for i in range(x):
    for j in range(y):
        if m[i][j] == 2: mx,my = i, j
        elif m[i][j] ==1: yx,yy = i, j
        else:
            continue

print(abs(mx - yx) + abs(my - yy))