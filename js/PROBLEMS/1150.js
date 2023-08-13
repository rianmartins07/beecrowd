var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

lines = lines.map(x => parseInt(x))
x = lines[0]

for (i of lines){
    if (i > x){
        z=i
    }
}

aux = x
cont = 1

while (aux<z){
    aux +=x
    x+=1
    cont++
}
console.log(cont+'')