def fibonacci (n):
    r=0
    z=1
    for i in range(0,n):
        aux = z
        z +=r
        r = aux
    return r
    
if __name__:
    n = int(input())
    
    for i in range(0, n):
        x = int(input())
        print(f"Fib({x}) = {fibonacci(x)}")
    