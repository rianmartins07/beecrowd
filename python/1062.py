pos, t = 0, 0
for i in range(0,6):
    e = float(input())
    if e > 0:
        t+=e
        pos+=1

print("{:.0f} valores positivos".format(pos))
print("{:.1f}".format(t/pos))