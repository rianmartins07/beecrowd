import sys
d = float(input());

if d <= 2000:
    print("Isento")
    sys.exit()
e=d
if d<=3000:
    j = (e-2000)*0.08
elif d<=4500:
    j =  (1000*0.08) +(d-3000)*0.18
elif d > 4500:
    j = (1000*0.08) +((1500)*0.18)+((e-4500)*0.28)
print("R$ {:.2f}".format(j))