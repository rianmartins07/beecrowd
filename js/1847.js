var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split(' ')
lines = lines.map(x => parseInt(x))

let a = lines[0]
let b = lines[1]
let c = lines[2]
let r
if (a>b){
    if (b<c){
        r = 1;
    }
    if (a-b > b-c && b >= c){
        r = 1;
    }
}
if (b>a && b-a <= c-b){
    r=1;
}
if (a==b){
    if (b < c){;
        r=1;
    }
}
if (r==1){
    console.log(":)");
}else{
    console.log(":(");
}