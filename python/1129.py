while True:
    q = int(input())
    a = ['A', 'B', 'C', 'D', 'E']
    if q == 0:
        break
    for i in range(q):
        x = list(map(int, input().split(' ')))
        res = list(filter(lambda x: x <= 127,  x))
        if len(res) == 1:
            pos = [i for i, val in enumerate(x) if val <= 127]
            print(a[pos[0]])
        else:
            print('*')
