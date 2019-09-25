// let PESEL = [1, 6, 3, 2, 2, 3, 0, 2, 5, 5, 6];
let PESEL = '88072810002'.split('').map(a=>+a);
console.log(PESEL);

let sumOfDigits = 9 * PESEL[0] +
    7 * PESEL[1] +
    3 * PESEL[2] +
    1 * PESEL[3] +
    9 * PESEL[4] +
    7 * PESEL[5] +
    3 * PESEL[6] + 
    1 * PESEL[7] + 
    9 * PESEL[8] + 
    7 * PESEL[9];

let correct = sumOfDigits % 10 === PESEL[10];

console.log(correct);
