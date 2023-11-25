var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split(' ')

a = parseInt(lines.shift())
b = parseInt(lines.shift())

if (a==b){
    console.log(a);
}else if (a != b){
    if (a > b){
        console.log(a);
    }else{
        console.log(b);
    }
}