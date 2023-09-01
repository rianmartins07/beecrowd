var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
lines = lines.map(x => parseFloat(x))
for (i=0;i<100;i++){
    if (lines[i] <=10){
        console.log(`A[${i}] = ${lines[i].toFixed(1)}`)
    }
}