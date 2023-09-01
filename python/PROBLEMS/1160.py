def anos (pa, pb, ca, cb):
    cont = 0 
    while cont < 100:
        pa+= int(pa*(ca/100))
        pb+=int(pb*(cb/100))
        cont+=1
        if pa>pb:
            print(f"{cont} anos.")
            break
        
        if cont>=100:
            print('Mais de 1 seculo.')
            break

if __name__:
    n = int(input())
    for i in range(0, n):
        pa, pb, ca, cb = list(map(float, input().split(' ')))
        anos(pa,pb,ca,cb)