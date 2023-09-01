var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split()

lines = lines.map(x => parseInt(x))

n = lines.shift()
aux = 1
k = 0
s=''
for (i=0;i<n;i++){
    if (i<n-1){
        s+=k + ' '
    }else{
        s+=k
    }

    if (i>=1){
        z=aux
        aux+=k
        k=z
    }else{
        k=aux
    }
}
console.log(s)