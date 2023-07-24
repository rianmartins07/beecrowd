var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

e = parseInt(lines[0])

for (i=1;i<=e;i++){
    lines[i] = lines[i].split(' ').map(item => parseFloat(item))

    console.log(((lines[i][0]*2 + lines[i][1]*3 + lines[i][2]*5)/10).toFixed(1))
}