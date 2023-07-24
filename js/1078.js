var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

e = parseInt(lines[0])

for (i=1;i<=10;i++){
    console.log(`${i} x ${e} = ${i*e}`)
}