i = 3
p = 2
r = 1
while (1):
    r +=i/p
    i+=2
    p*=2
    if i == 39:
        print(f"{r:.2f}")
        break
