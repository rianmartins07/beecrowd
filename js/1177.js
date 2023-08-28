var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

n = lines.shift()
x = 0
for(let i=0;i<1000;i++){
    console.log(`N[${i}] = ${x}`);
    if (x>n-2){
        x=0;
    }else{
        x++;
    }
}
