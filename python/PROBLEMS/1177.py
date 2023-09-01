n = int(input())
x=0
for i in range(0, 1000):
    print(f"N[{i}] = {x}")
    if (x>n-2):
        x=0
    else:
        x+=1
    