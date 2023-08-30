var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
n = lines.shift()

array = lines.shift()

array = array.split(' ').map(x => parseInt(x))
x = array
let menor = x[0]
let pos = 0

for (i=1;i<n;i++){
    if(x[i]<menor){
        menor=x[i]
        pos=i
    }
}

console.log(`Menor valor: ${menor}`)
console.log(`Posicao: ${pos}`)