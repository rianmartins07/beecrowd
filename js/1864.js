var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
n = parseInt(lines.shift())
s = "LIFE IS NOT A PROBLEM TO BE SOLVED"
r = ''
for (i=0;i<n;i++){
    r+=s[i]
}
console.log(r)