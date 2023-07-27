n = int(input())

d=0
f=0
for i in range(0, n):
    e = int(input())
    if e >=10 and e <= 20:
        d+=1
    else:
        f+=1
print(f"{d} in")
print(f"{f} out")