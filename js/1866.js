var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
n = parseInt(lines.shift())
for(i=0;i<n;i++){
    x = parseInt(lines.shift())
    if (x%2 == 0){
        console.log("0");
    }else{
        console.log("1");
    }
}