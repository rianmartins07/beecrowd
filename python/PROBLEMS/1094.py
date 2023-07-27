e = int(input())
dict = {
    'C':0,
    'R':0,
    'S':0,
}
for i in range(0, e):
    n = input().split(' ')
    dict[n[1]] += int(n[0])
    
total = sum(dict.values())
print(f"Total: {total} cobaias")
print(f"Total de coelhos: {dict['C']}")
print(f"Total de ratos: {dict['R']}")
print(f"Total de sapos: {dict['S']}")
print("Percentual de coelhos: {:.2f} %".format((dict['C']*100)/total))
print("Percentual de ratos: {:.2f} %".format((dict['R']*100)/total))
print("Percentual de sapos: {:.2f} %".format((dict['S']*100)/total))