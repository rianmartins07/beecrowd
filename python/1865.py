n = int(input())
for i in range(n):
    n = input().split()[0]
    if n.lower() == 'thor':
        print('Y')
    else:
        print('N')