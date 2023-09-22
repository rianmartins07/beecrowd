entrada = input().split(' ')
a = int(entrada[0])
b = int(entrada[1])
flag = False

if a>=0:
    quociente = a/b
    r = a-int(quociente)*b
    print (int(quociente), r)
else:
    if b < 0:
        x = b*(-1)
    else:
        x=b
    
    for i in range(0, x*9):
    
        if x*i >= a*-1:
            r = (x*i)-a*-1
            quociente=(x*i)/b
            print (int(quociente)*-1, r)
            break
    
   