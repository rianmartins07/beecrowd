var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split(' ')

lines = lines.map(x => parseInt(x))
a = lines[0]
for (i of lines){

    if (i > 0){
        n=i
    }
}

r = 0;
for (i=1;i<=n;i++){
    r+=a;
    a++;
}
console.log(r+'')