var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
lines = lines.map(x => parseInt(x))

n = lines.shift()

for(let i=0;i<n;i++){
    x = lines.shift()
    console.log(`Fib(${x}) = ${fibonacci(x)}`)
}

function fibonacci(n){
    z=1, r=0;

    for (i=0;i<n;i++){
        aux = z;
        z += r;
        r = aux;
    }
    return r;
}
