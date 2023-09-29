var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
n = parseInt(lines.shift())
e = lines.shift().split(' ').map(x => parseInt(x))
r = e[0]
let aux
for(i=0;i<n;i++){
    x = e[i]
    if (i==0){
        aux = x
        r = i
    }
    if (x<aux){
        aux = x
        r = i
    }

}
console.log(r+1+'')