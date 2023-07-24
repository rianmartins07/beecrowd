var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
e = parseInt(lines[0])
max = e
pos = 0

for (i=1;i<=99;i++){
    if (parseInt(lines[i]) > max){
        max = parseInt(lines[i])
        pos = i;
    }
}
console.log(max)
console.log(pos+1 + '')