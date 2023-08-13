var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

lines = lines.map(x => parseInt(x))


while (1){
    x = lines.shift()
    if (x==0){
        break
    }
    s = ''
    for (i=1;i<=x;i++){
        s += i
        if (i<x){
            s+=' '
        }
    }
    console.log(s)

}