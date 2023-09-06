var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

while (1){

    n = lines.shift()
    if (n.length == 1){
        break
    }
    n = n.split(' ').map(x => parseInt(x))
    
    a = n[0]
    b = n[1]
    c = n[2]
    console.log(`${parseInt(Math.sqrt((a*b*100)/c))}`)
}