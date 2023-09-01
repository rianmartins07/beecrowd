var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

lines = lines.map(x => parseInt(x))
cont = 0
aux = 0
while (1){
    n = lines.shift()
    if (n<0){
        console.log((aux/cont).toFixed(2) + '')
        break;
    }
    cont++
    aux+=n
}
