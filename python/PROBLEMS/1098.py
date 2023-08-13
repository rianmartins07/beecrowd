i=0
j=1
z=0
while i<=2:
    while z<3:
        if j==1.0 or (j>1.9 and j<2.0) or (j>2.9 and j<3.0) or (j>3.9 and j<4.0) or i>1.9:
            print("I={:.0f} J={:.0f}".format(i, j+z))
        else:
            print("I={:.1f} J={:.1f}".format(i, j+z))
        z+=1
    j+=0.2
    z=0
    i+=0.2