mega, res = 0, 0
while(1):
    p = input()
    if len(p) > 3:
        print(mega)
        res+=1
        mega = 0
    if (res==3):
        break
    else:
        for i in range(len(p)):
            if p[i] == "*":
                mega += 2**(len(p)-i-1)