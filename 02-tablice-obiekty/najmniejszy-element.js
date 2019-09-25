let input = [5, 9, -20, 0, -3];

let i = 0;
let lowestNumber = input[0];

while (i < input.length) {

    if (lowestNumber > input[i]) {
        lowestNumber = input[i];
    }

    i++;
}

console.log('result:' + lowestNumber);
