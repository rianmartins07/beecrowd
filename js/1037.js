var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

e = lines.shift()
if (e >= 0){
    if (e <= 25){
        console.log("Intervalo [0,25]");
    }
    else if (e <= 50){
        console.log("Intervalo (25,50]");
    }
    else if (e <= 100){
        console.log("Intervalo (75,100]");
    }
    else{
        console.log("Fora de intervalo");
    }
} else{
    console.log("Fora de intervalo");
}