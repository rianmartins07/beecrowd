var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
n = parseInt(lines.shift())
for(i=0;i<n;i++){
    e = lines.shift().split(' ')[0]
    if (e == 'thor' || e == 'Thor'){
        console.log('Y')
    }else{
        console.log('N')
    }
}