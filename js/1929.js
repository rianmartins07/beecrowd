var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split(' ')

a = parseInt(lines.shift())
b = parseInt(lines.shift())
c = parseInt(lines.shift())
d = parseInt(lines.shift())

if (a + b > c && a + c > b && c + b > a){
    console.log("S");
}else if (a + b > d && a + d > b && b + d > a) {
    console.log("S");
}else if (a+c > d && d + a > c && c + d > a){
    console.log("S");
}else if (b+c > d && b + d > c && c + d > b){
    console.log("S");
}else{
    console.log("N");
}