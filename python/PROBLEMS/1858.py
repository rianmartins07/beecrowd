n = int(input())
e = list(map(int, input().split(' ')))
r = e[0]
for i in range(n):
    x = e[i]
    if i == 0:
        aux = r
        r = i
    if x < aux:
        aux = x
        r = i
        
print(r+1)