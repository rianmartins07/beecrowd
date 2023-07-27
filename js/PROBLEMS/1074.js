var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

e = lines[0]
str = ''
for (i=1;i<=e;i++){
    if (lines[i] == 0){
        console.log('NULL')

    }else {
        if (lines[i]%2==0){
            str+= "EVEN"
        }else{
            str+= "ODD"
        }
    
        if (lines[i] > 0){
            str+=' POSITIVE'
        }else{
            str+=' NEGATIVE'
        }
        console.log(str)
    }

    str=''
}