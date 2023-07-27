var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

lines = lines.map(function (item){
    return parseInt(item)
})

cont = 0;
for(line in lines){
    if (lines[line]%2 == 0){
        cont++;
    }
}

console.log(cont+" valores pares")