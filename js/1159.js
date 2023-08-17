var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

lines = lines.map(x => parseInt(x))


function soma(n) {

    let cont = 0
    for (let i =0;i<10;i++){
        if (n%2==0){
            cont+=n;
        }
        n++;
    }
    return cont;
}

while(1){
    n = lines.shift()
    if (n==0){
        break
    }
    console.log(soma(n)+'')
}