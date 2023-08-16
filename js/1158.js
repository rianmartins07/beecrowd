var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

n = lines.shift()

for(i=0;i<n;i++){
    e = lines.shift()
    console.log(e)
    x = parseInt(e[0])
    y = parseInt(e[1])

    cont=0
    for (j=0;j<y*2;j++){
        if (x%2!=0){
            cont+=x
        }
        x++;
    }
    console.log(cont+'')
}
