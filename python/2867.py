import math

n = int(input())
for i in range(n):
    m,n = list(map(int, input().split()))
    print(int(n*(math.log(m,10)))+1)