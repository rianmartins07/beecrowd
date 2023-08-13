n = int(input())
for i in range(0, n):
    cont = 0;
    x, y = list(map(int, input().split(' ')))
    if y>x:
        x, y = y, x
    for j in range(y+1, x):
        if j%2!=0:
            cont+=j
    print(cont)
    