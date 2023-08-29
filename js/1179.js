var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
lines = lines.map(x => parseInt(x))
var impar = [5]
var par = [5]
var x=0
var j=0
for (let i=0;i<15;i++){
    let y = lines.shift()
    if (y % 2 == 0){
        par[j] = y;
        j++;
    }
    else{
        impar[x] = y;
        x++;
    }
    if (x==5){
        printImpar(impar, x);
        x=0;
        var impar = []
    }
    if (j==5){
        printPar(par, j);
        j=0;
        var par = [5];
    }

}
if (x>0){
    printImpar(impar, x);
}
if (j>0){
    printPar(par, j);
}

function printPar(par, j){
    for(let i=0;i<j;i++){
        console.log(`par[${i}] = ${par[i]}`)
    }
}
function printImpar(impar, x){
    for(let i=0;i<x;i++){
        console.log(`impar[${i}] = ${impar[i]}`)
    }
}