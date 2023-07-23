var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

e = lines[0]

for (i=0;i<10*1000;i++){
    if (i%e==2){
        console.log(`${i}`)
    }
}