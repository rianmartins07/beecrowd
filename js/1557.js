var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')
lines = lines.map(x => parseInt(x))

function qtdalgarismoo (n){
    return String(n).length
}

function matriz(n) {
    let i, j
    let x = 0
    big  = qtdalgarismoo(Math.pow(2, (2*n-2)))

    for (i=0;i<n;i++){
        s = ''
        for(j=0;j<n;j++){
            if (j === 0) {
                s += String((Math.pow(2, x + j))).padStart(big);
            } else {
                s += ' ' + String((Math.pow(2, x + j))).padStart(big);
            }
            
        }
        console.log(s)
        x++
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