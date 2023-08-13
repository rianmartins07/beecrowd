var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

lines = lines.map(function(item){
    return item.split(' ').map(x => parseInt(x))
})

n = lines[0][0]
for(i=1;i<=n;i++){
    x = lines[i][0]
    y = lines[i][1]
    
    cont=0
    if (y>x){
        aux = y
        y = x
        x = aux
    }
    for(j=y+1;j<x;j++){
        if (j%2!=0){
            cont+=j
        }
    }
    console.log(cont+'')
}