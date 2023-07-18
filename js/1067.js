var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

lines = lines.map(function (item){
    return parseInt(item)
})

for (i=0;i<=lines[0];i++){
    if (i%2!=0){
        console.log(i+"")
    }
}