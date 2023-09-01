x = []

for i in range(0, 20):
    x.append(float(input()))

for i in range(0, 20):
    print(f"N[{i}] = {x[19-i]:.0f}")