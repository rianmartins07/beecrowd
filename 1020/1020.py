e = int(input())
a = e//365
e-= a*365
m = e//30
e-= m*30
print(a, 'ano(s)')
print(m, 'mes(es)')
print(e, 'dia(s)')