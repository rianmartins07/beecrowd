var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

lines = lines.map(function (item){
    return parseInt(item)
})
par = 0
imp = 0
pos = 0
neg = 0
for (i=0;i<5;i++){

    if (lines[i]%2 == 0){
        par++;
    }else {
        imp++;
    }
    if(lines[i] > 0){
        pos++;
    }else if (lines[i] < 0){
        neg++;
    }
}
console.log(""+par+" valor(es) par(es)");
console.log(""+imp+" valor(es) impar(es)");
console.log(""+pos+" valor(es) positivo(s)");
console.log(""+neg+" valor(es) negativo(s)");