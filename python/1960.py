romano = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
}

n = input()
n = list(map(str,n))
for i in range(len(n)):
    n[len(n)-i-1] = int(n[len(n)-i-1])*(10**i)

s=''
for i in range(len(n)):
    if n[i]==0:
        continue
    if n[i] in romano:
        s+=romano[n[i]]
    else:
        while n[i] != 0:
            if n[i] not in romano:
                for key, value in romano.items():
                    if int(n[i])>key:
                        s+=value
                        n[i]-= int(key)
                        break
            else:
                s+=romano[n[i]]
                n[i]-=n[i]
print(s)