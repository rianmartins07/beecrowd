import sys
e = list(map(float, input().split(' ')))
x = e[0]
y = e[1]

if x == 0 and y!=0:
    print("Eixo Y")
    sys.exit()
elif y == 0 and x != 0:
    print("Eixo X")
    sys.exit()
if x > 0 and y > 0:
    print("Q1")
elif x < 0 and y > 0:
    print("Q2")
elif x < 0 and y < 0:
    print("Q3")
elif x > 0 and y < 0:
    print("Q4")
else:
    print("Origem")
    
