x = int(input())
y = int(input())
cont = 0
for i in range(y+1, x):
    if i%2!=0:
        cont+=i
        
print(cont)