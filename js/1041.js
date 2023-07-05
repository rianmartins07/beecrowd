var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split(' ')

x = parseFloat(lines[0])
y = parseFloat(lines[1])


if(x === 0 && y!=0){
    console.log("Eixo Y");
    return;
}

else if(y === 0 && x != 0){
    console.log("Eixo X");
    return;
}
if( x > 0 && y > 0){
    console.log("Q1");
}
else if( x < 0 && y > 0){
    console.log("Q2");
}
else if( x < 0 && y < 0){
    console.log("Q3");
}
else if( x > 0 && y < 0){
    console.log("Q4");
}
else{
    console.log("Origem");
}