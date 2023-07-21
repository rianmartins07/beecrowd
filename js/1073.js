var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

e = lines[0]

for (i=1;i<=e;i++){
    if (i%2==0){
        console.log(`${i}^2 = ${i*i}`)
    }
}