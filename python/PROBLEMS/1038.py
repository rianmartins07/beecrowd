e = list(map(int, input().split(' ')))


if e[0] == 1:
    e[0] = 4.0
elif e[0] == 2:
    e[0] = 4.5
elif e[0] == 3:
    e[0] = 5.0
elif e[0] == 4:
    e[0] = 2
else:
    e[0] = 1.5

print("Total: R$ {:.2f}".format(e[0]*e[1]))