var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
lines = lines.map(x => parseInt(x))

function matriz(n) {
    let i, j
    for (i=1;i<=n;i++){
        s = ''
        for(j=1;j<=n;j++){
            let x=i
            if (j==i){
                x = 1;
            }
            if (i+j == n+1){
                x=2;
            }
            s+=x
        }
        console.log(s)
    }
    console.log()
}

while (1){
    n = lines.shift()
    if (n!=0){
        matriz(n)
    }else{
        break
    }
}