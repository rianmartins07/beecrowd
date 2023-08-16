n = int(input())
for i in range(0, n):
    x, y = list(map(int, input().split(' ')))
    cont = 0
    for j in range(0, y*2):
        if x%2 != 0:
            cont+=x
        x+=1
    print(cont)