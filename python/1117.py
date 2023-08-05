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
        import sys
        sys.exit()