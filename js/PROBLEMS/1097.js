i=1
j=7
z=7
y=0
while (i<=9){
    while (y<3){
        console.log(`I=${i} J=${j}`)
        j--;
        y++;
    }
    y=0
    j=z+2
    z+=2
    i+=2
}