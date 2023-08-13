numbers = list(map(lambda x: int(x), input().split(' ')))
a = numbers[0]
n = next((x for x in numbers[1:] if x > 0), None)

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