var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split()

lines = lines.map(x => parseInt(x))

n = lines.shift()

function fatorial(n){
    if (n===1){
        return 1;
    }else{
        return n*fatorial(n-1)
    }
}

console.log(fatorial(n)+'')