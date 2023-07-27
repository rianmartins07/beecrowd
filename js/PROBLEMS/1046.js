var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split(' ')

let i = parseFloat(lines[0])
let f = parseInt(lines[1])
let result =0


if (i > f) {
    result = 24 - (i - f);
} else if (i < f) {
    result = f - i;
} else {
    result = 24;
}
console.log("O JOGO DUROU %d HORA(S)", result);