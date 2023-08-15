
n = int(input())
for i in range(0, n):
    s = str(input())

    s = list(filter(lambda x: x!='.', s))

    i=0
    d = 0
    cont = 0
    tam = len(s)
    while (1):
        try:
            if s[i] == '<':
                if i < len(s)-1 and s[i+1] == '>' :
                    del s[i]
                    del s[i]
                    i=0
                    d+=1
                    cont+=1

                else:
                    i+=1
            else:
                i+=1
        except:
            break
        if cont*2 > tam:
            break
        

    print(cont)
    
