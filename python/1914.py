n = int(input())
for i in range(n):
    n1, r1, n2, r2 = list(map(str, input().split(' ')))
    v1, v2 = list(map(int, input().split(' ')))
    res = v1 + v2
    if res%2 == 0:
        if r1 == "PAR":
            print(n1)
        else:
            print(n2)
    else:
        if r1 == "IMPAR":
            print(n1)
        else:
            print(n2)