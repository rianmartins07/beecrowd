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
            if (i!=j && j > i){
                x = j-i+1;
            }
            if (i!=j && j < i){
                x = i - j + 1;
            }
            if (j!=n){
                s+= String(x).padStart(3, ' ') + ' '
            }else{
                s+= String(x).padStart(3, ' ')
            }
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