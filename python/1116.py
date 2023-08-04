n = int(input())

for i in range(0, n):
    x,y = list(map(int, input().split(' ')))
    if y!=0:
        print('{:.1f}'.format(x/y))
    else:
        print('divisao impossivel')