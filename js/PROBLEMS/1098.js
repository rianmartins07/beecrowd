i=0
j=1
z=0

while (i<=2){
    while (z<3){
        if (j==1.0 || (j>1.9 && j<2.0) || (j>2.9 && j<3.0) || (j>3.9 && j<4.0) || i>1.9){
            console.log(`I=${i.toFixed(0)} J=${(j+z).toFixed(0)}`)
        }
        else{
            console.log(`I=${i.toFixed(1)} J=${(j+z).toFixed(1)}`)
        }
        z+=1
    }
    j+=0.2
    z=0
    i+=0.2
}