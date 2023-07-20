var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

x=parseInt(lines[0])
y=parseInt(lines[1])
cont=0
for (i=y+1;i<x;i++){
    if (i%2!==0){
        cont+=i
    }
}
console.log(cont +'')