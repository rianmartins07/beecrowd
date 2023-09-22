a, b, c = list(map(int, input().split(' ')))
r=0
if a>b:
    if b<c:
        r = 1
    
    if a-b > b-c and b >= c:
        r = 1
    

if b>a and b-a <= c-b:
    r=1

if a==b:
    if b < c:
        r=1
    

if r==1:
    print(":)")
else:
    print(":(")
