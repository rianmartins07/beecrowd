i=0
g=0
ci=0
cg=0
q=0
e=0
qgren=0

while (1):
    i, g = list(map(int, input().split(' ')))
    if i>g:
        ci+=1
    elif i<g:
        cg+=1
    else:
        e+=1
    qgren+=1
    print('Novo grenal (1-sim 2-nao)')
    ngre = int(input())
    if ngre==2:
        print(f"{qgren} grenais")
        print(f"Inter:{ci}")
        print(f"Gremio:{cg}")
        print(f"Empates:{e}")
        if ci>cg:
            print("Inter venceu mais")
        elif ci<cg:
            print("Gremio venceu mais")
        else:
            print("Nao houve vencedor")
        
        import sys
        sys.exit()