cont, i = 0, 0
while True:
    x = float(input())
    if x>=0 and x<=10:
        cont+=x
        i+=1
    else:
        print('nota invalida')
    if i==2:
        print(f'media = {(cont/2):.2f}')
        while (True):
            print('novo calculo (1-sim 2-nao)')
            cal = float(input())
            if cal == 1:
                i=0
                cont=0
                break;
            elif cal == 2:
                import sys
                sys.exit()