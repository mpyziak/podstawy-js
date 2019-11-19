// baza: stary skrypt generujący liczby pierwsze; modyfikacji - nie aż tak dużo


function countDivisors(checkedNumber) {
    let i = 1;
    let divisorCount = 0;
    while (i <= checkedNumber) {
        if (checkedNumber % i == 0) {
            divisorCount = divisorCount + 1;
        }
        i = i + 1;
    }

    return divisorCount;
}


function isPrimeNumber(number) {

    let divisorCount = countDivisors(number);
    return divisorCount === 2;
}


function formatOutput(checkedNumber) {

    let output = checkedNumber + ': ';
    let k = 1;

    while (k <= checkedNumber) {

        output = output + '|';
        if (k % 5 == 0) { // dodaj przerwę co 5 kresek
            output = output + ' ';
        }

        k = k + 1;
    }

    return output;
}


let foundNumbersCount = 0;
let checkedNumber = 0;

while (foundNumbersCount < 9) {

    if (isPrimeNumber(checkedNumber)) {

        foundNumbersCount++;
        console.log(formatOutput(checkedNumber));
    }

    // przygotowanie do następnej iteracji
    checkedNumber++;
}
