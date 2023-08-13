var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')



for (i=1;i<lines.length-1;i++){
    lines[i] = lines[i].split(' ')
    x=parseInt(lines[i][0])
    y=parseInt(lines[i][1])

    if (y!==0){
        console.log(((x/y).toFixed(1)));
    }else{
        console.log("divisao impossivel");
    }
}