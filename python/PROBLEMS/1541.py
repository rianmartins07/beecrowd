import math

while (1):
    n = input().split()
    if len (n)==1:
        break
    a,b,c = list(map(int, n))
    print(f"{int(math.sqrt((a*b*100/c)))}")