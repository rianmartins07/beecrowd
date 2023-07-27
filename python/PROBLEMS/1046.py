e = list(map(int, input().split(' ')))
i = e[0]
f = e[1]
if i > f:
    result = 24-(i-f);

elif (i < f):
    result = f - i;

else:
    result = 24;

print("O JOGO DUROU {result} HORA(S)".format(result=result));

