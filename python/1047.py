
e = list(map(int, input().split(' ')));

hi = e[0];
mi = e[1];
hf = e[2];
mf = e[3];


if (hi > hf):
    r_h = 24 - (hi-hf);
elif (hi < hf):
    r_h = hf - hi;

elif (hi == hf):
    r_h = 24;

if (mi > mf):
    r_m = 60 - (mi-mf);
    r_h -= 1;
elif (mi < mf):
    r_m = mf - mi;
    if (hi == hf):
        r_h -=24;
    

elif (mi == mf):
    r_m = 0;


print("O JOGO DUROU {hora} HORA(S) E {minuto} MINUTO(S)".format(hora=r_h, minuto=r_m));