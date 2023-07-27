cont=0
for i in range(0, 6):
    e = float(input())
    if e > 0:
        cont+=1
        
print("{result} valores positivos".format(result=cont))