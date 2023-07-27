var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numbers = [], sorted_numbers= [3], i, j, assistant;

input = lines[0];
data = input.split(" ");

numbers[0] = Number(data[0]);
numbers[1] = Number(data[1]);
numbers[2] = Number(data[2]);

for (i = 0; i < 3; i ++) {
    sorted_numbers[i] = numbers[i];
}

for (i = 0; i < 3; i ++) {

    for (j = i + 1; j < 3; j++) {

        if (sorted_numbers[i] > sorted_numbers[j]) {
            assistant = sorted_numbers[i];
            sorted_numbers[i] = sorted_numbers[j];
            sorted_numbers[j] = assistant;
        }
    
    }
}

for (i = 0; i < 3; i ++) {
    console.log(sorted_numbers[i]);
}

console.log();

for (i = 0; i < 3; i ++) {
    console.log(numbers[i]);
}