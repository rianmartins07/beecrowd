import sys
while True:
    x, y = list(map(int, input().split(' ')))
    if x>0:
        if y>0:
            print("primeiro")
        else:
            print("quarto")
        
    elif x<0:
        if y>0:
            print("segundo")
        else:
            print("terceiro")
        
    else:
        sys.exit()
    