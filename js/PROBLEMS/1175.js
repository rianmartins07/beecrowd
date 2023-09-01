var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
lines = lines.map(x => parseFloat(x))
for (i=0;i<20;i++){
    console.log(`N[${i}] = ${lines[19-i].toFixed()}`)
}