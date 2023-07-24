e = int(input())
max = e
pos = 0
for i in range(0,99):
    r = int(input())
    if r > max:
        max = r
        pos = i
pos+=2
print(max)
print(pos)