e = float(input())
e = int(e * 100)

print("NOTAS:")
print(e // 10000, "nota(s) de R$ 100.00")
e %= 10000
print(e // 5000, "nota(s) de R$ 50.00")
e %= 5000
print(e // 2000, "nota(s) de R$ 20.00")
e %= 2000
print(e // 1000, "nota(s) de R$ 10.00")
e %= 1000
print(e // 500, "nota(s) de R$ 5.00")
e %= 500
print(e // 200, "nota(s) de R$ 2.00")
e %= 200

print("MOEDAS:")
print(e // 100, "moeda(s) de R$ 1.00")
e %= 100
print(e // 50, "moeda(s) de R$ 0.50")
e %= 50
print(e // 25, "moeda(s) de R$ 0.25")
e %= 25
print(e // 10, "moeda(s) de R$ 0.10")
e %= 10
print(e // 5, "moeda(s) de R$ 0.05")
e %= 5
print(e // 1, "moeda(s) de R$ 0.01")
