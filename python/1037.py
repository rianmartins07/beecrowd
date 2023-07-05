e = float(input())
if e >= 0:
    if e <= 25:
        print("Intervalo [0,25]")
    elif e <= 50:
        print("Intervalo (25,50]")
    elif e <= 100:
        print("Intervalo (75,100]")
    else:
        print("Fora de intervalo")
else:
    print("Fora de intervalo")