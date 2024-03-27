n = str(input())
signal = n[0]
number = n
if signal == '-' or signal == '+':
    number = n[1:]
else:
    signal = '+'
value = float(number)
print(f"{signal}{value:.4E}")