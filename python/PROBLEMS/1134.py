a, g, d = 0, 0, 0

while (True):
    i = int(input())

    if (i==1):
        a+=1
    elif(i==2):
        g+=1
    elif(i==3):
        d+=1
    elif(i==4):
        break
    

print(f"MUITO OBRIGADO")
print(f"Alcool: {a}")
print(f"Gasolina: {g}")
print(f"Diesel: {d}")