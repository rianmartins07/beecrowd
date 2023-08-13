var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

x = parseInt(lines.shift())
y = parseInt(lines.shift())

if (x>y){
    aux = x;
    x = y
    y = aux
}
cont = 0

for (i=x;i<=y;i++){
    if (i%13!=0){
        cont+=i
    }
}
console.log(cont + '')