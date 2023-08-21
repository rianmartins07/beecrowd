var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')
lines.map(x => parseInt(x))
n = lines.shift()

for(let i=0;i<n;i++){
    x = lines.shift()
    perfeito(x)
}

function perfeito (n){
    i=1, cont=0
    while (i < n) {
        if (n % i == 0) {
            cont += i;
        }
        i++;
    }
    if (cont == n) {
        console.log(n + " eh perfeito");
    } else {
        console.log(n + " nao eh perfeito");
    }
}