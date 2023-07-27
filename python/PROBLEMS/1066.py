par, imp, pos, neg = 0,0,0,0
for i in range(0, 5):
    e = int(input())

    if (e%2 == 0):
        par+=1
    else:
        imp+=1
    
    if(e > 0):
        pos+=1
    elif (e < 0):
        neg+=1
        

print("{:d} valor(es) par(es)".format(par));
print("{:d} valor(es) impar(es)".format(imp));
print("{:d} valor(es) positivo(s)".format(pos));
print("{:d} valor(es) negativo(s)".format(neg));