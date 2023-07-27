var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

lines = lines.map(function (item){
    return parseFloat(item)
  })

cont = 0;
for (i=0;i<lines.length;i++){

    if (lines[i] > 0){
        cont++;
    }
}
console.log(""+ cont +" valores positivos")