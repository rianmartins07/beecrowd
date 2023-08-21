var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split(' ')

lines.map(x => parseInt(x))

x = lines[0]
y = lines[1]
s = ''
for (i=1;i<=y;i++){
    s += i
    if (i%x == 0 && i<y){
        s+='\n'
    }else if (i<y){
        s+=' '
    }
}
console.log(s)
