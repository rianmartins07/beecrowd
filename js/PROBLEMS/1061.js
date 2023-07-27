var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

di = parseInt(lines[0].split(' ')[1])

s = lines[1].split(':').map(function (item){
    return item.trim()
})
hi = parseInt(s[0])
mi = parseInt(s[1])
si = parseInt(s[2])

df = parseInt(lines[2].split(' ')[1])
s = lines[3].split(':').map(function (item){
    return item.trim()
})
hf = parseInt(s[0])
mf = parseInt(s[1])
sf = parseInt(s[2])


var ri = (di*24*60*60) + (hi*60*60) + (mi*60) + si
var rf = (df*24*60*60) +(hf*60*60) + (mf*60) + sf
rf-=ri
var dr = Math.floor((((rf/60)/60)/24))
rf -= dr*24*60*60
var hr = Math.floor(((rf/60)/60))
rf -= hr*60*60
var mr = Math.floor(((rf/60)))
rf -= mr*60
sr = rf
console.log(""+ dr +" dia(s)")
console.log(""+ hr +" hora(s)")
console.log(""+ mr +" minuto(s)")
console.log(""+ sr +" segundo(s)")