import sys
p, n = list(map(int, input().split()))
canos = list(map(int, input().split()))

for i in range(n):
    if i != 0:
        if abs(canos[i-1]-canos[i]) > p:
            print('GAME OVER')
            sys.exit()

print('YOU WIN')

    