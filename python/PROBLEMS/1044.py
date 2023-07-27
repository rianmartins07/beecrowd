e = list(map(int,input().split(' ')))

a = e[0]
b = e[1]

if a%b==0 or b%a==0:
    print("Sao Multiplos")
else:
    print("Nao sao Multiplos")