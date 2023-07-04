e = int(input())

h=e//3600
e -= (e//3600)*3600
m=e//60
e -= (e//60)*60
s=e

print(f"{h}:{m}:{s}")