x, j = 0, 0
def printImpar(impar, x):
    for i in range(0, x):
        print(f"impar[{i}] = {impar[i]}")
        
def printPar(par, j):
    for i in range(0, j):
        print(f"par[{i}] = {par[i]}")

par, impar = [], []
for i in range(0, 15):
    y = int(input())
    if y%2 == 0:
        par.append(y)
        j+=1
    else:
        impar.append(y)
        x+=1
    if x==5:
        printImpar(impar, x)
        impar = []
        x=0
    if j==5:
        printPar(par, j)
        par = []
        j=0

if x>0:
    printImpar(impar, x)
if j>0:
    printPar(par, j)
    
