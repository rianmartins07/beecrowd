import sys
i=1
while True:
    try:
        n = int(input())
        s = "0 " + " ".join([str(i) for i in range(n+1) for j in range(i)])
        print(f"Caso {i}: {len(s.strip().split(' '))} {'numero' if n==0 else 'numeros'}")
        i+=1
        print(s.strip())
        print()
    except EOFError:
        sys.exit()
        