var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

lines = lines.map(function(item){
    return item.split(' ').map(x => parseInt(x))
})

for (i=0;i<lines.length;i++){
    lines[i].sort((x,y) => x-y)
    x = lines[i][1]
    y = lines[i][0]
    sum=0
    s = ''
    if (x>0 && y>0){
        for (j=y;j<=x;j++){
            sum+=j
            s += j + ' '
        }
        console.log( s + "Sum="+sum+"")
    }

}