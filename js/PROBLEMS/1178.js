var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

n = parseFloat(lines.shift())

for(let i=0;i<100;i++){
    console.log(`N[${i}] = ${(n).toFixed(4)}`);
    n/=2
    if (i==5){
        n+=0.0001
    }

}
