def verifica (n):
    return 1 if n<=0 else n

if __name__:
    x = []
    for i in range(0, 10):
        x.append(verifica(int(input())))
    
    for i in range(0, 10):
        print(f"X[{i}] = {x[i]}")