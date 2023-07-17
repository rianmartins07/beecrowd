def retira(x):
    return int(x.strip())

e = input().split(' ')
di = int(e[1])
e = input().split(':')

e = list(map(retira, e))
hi = e[0]
mi = e[1]
si = e[2]

e = input().split(' ')
df = int(e[1])
e = input().split(':')

e = list(map(retira, e))
hf = e[0]
mf = e[1]
sf = e[2]


ri = (di*24*60*60) + (hi*60*60) + (mi*60) + si
rf = (df*24*60*60) +(hf*60*60) + (mf*60) + sf

rf-=ri
dr = (int) (((rf/60)/60)/24)
rf -= dr*24*60*60
hr = (int) ((rf/60)/60)
rf -= hr*60*60
mr = (int) ((rf/60))
rf -= mr*60
sr = rf

print("{:d} dia(s)".format(dr));
print("{:d} hora(s)".format(hr));
print("{:d} minuto(s)".format(mr));
print("{:d} segundo(s)".format(sr));