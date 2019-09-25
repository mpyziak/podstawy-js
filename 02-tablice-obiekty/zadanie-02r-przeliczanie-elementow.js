// oblicz sumę elementów poniższej tablicy:
let processedNumbers = [1, 5, 3, 4, 2, 5, 6, 2, 1, 0, 2, 2, 1, 9, 12, 3, 1, 4];

i = 0;
sum = 0;

while (i < processedNumbers.length) {

    sum += processedNumbers[i];
    i++;
}

let avg = sum / processedNumbers.length;

console.log('Suma: ' + sum + ', średnia: ' + avg);
