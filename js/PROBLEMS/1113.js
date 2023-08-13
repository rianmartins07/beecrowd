var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

lines = lines.map(function(item){
    return item.split(' ').map(x => parseInt(x))
})

for (i=0;i<lines.length;i++){
    x=lines[i][0]
    y=lines[i][1]

    if (x>y){
        console.log("Decrescente");
    }else if (x<y){
        console.log("Crescente");
    }

}