var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

n = lines[0]
d=0
f=0
for (i=0;i<n;i++){
    if (lines[i+1] >=10 && lines[i+1]<=20){
        d++
    }else{
        f++
    }
}
console.log(d+" in")
console.log(f+" out")
