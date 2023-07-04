var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');
let a = parseFloat(lines.shift())
let b = parseFloat(lines.shift())
let c = parseFloat(lines.shift())


function max (a, b, c) {
    let max_value = a;

    if (b>max_value){
        max_value=b
    }
    if (c>max_value){
        max_value=c
    }
    return max_value
}

console.log(max(a,b,c), "eh o maior")