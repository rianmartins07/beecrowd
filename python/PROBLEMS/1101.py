import sys

def funcao(x, y):
    sum=0
    for i in range(y, x+1):
        print(i, end=' ')
        sum+=i;
    print(f'Sum={sum}')
    

while True:
    x, y = list(map(int, input().split(' ')))
    
    if y > x:
        x, y = y, x
    if x <= 0 or y <= 0:
        sys.exit()
    else:
        funcao(x,y)