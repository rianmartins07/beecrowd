var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split(' ')



a = parseInt(lines[0])
b = parseInt(lines[1])

if (a>=0){
    quociente = a/b
    r = a-parseInt(quociente)*b
    console.log(parseInt(quociente), r)
}else{
    if (b<0){
        x = b*(-1);
    }else{
        x=b;
    }
    for (i=0;i<x*9;i++){
        if (x*i >= a*(-1)){
            r = (x*i)-a*(-1);
            quociente = (x*i)/b;
            console.log( `${parseInt(quociente)*(-1)} ${r}`);
            break;
        }
    }
}