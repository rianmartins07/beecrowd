var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

n = lines.shift()

for(i=0;i<n;i++){
    e = lines.shift().split(' ').map(x => parseInt(x))


    x = e[0]
    y = e[1]
    cont=0
    for (j=0;j<y*2;j++){
        if (x%2!=0){
            cont+=x
        }
        x++;
    }
    console.log(cont+'')
}
