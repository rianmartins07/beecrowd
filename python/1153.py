def fatorial (n):
    if n==1:
        return 1
    else:
        return n*fatorial(n-1)


if __name__:
    n = int(input())
    print(fatorial(n))