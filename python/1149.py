a, n = list(map(int, input().split(' ')))

if n<=0:
    while True:
        n = int(input())
        if n>0:
            break

r = 0

for i in range(1, n+1):
    r+=a
    a+=1

print(r)