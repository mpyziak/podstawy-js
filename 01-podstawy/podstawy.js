// przypisywanie zmiennych

let a = 14;
let b = 2;
let c = 3;
let sampleText = 'sample text';

// prosty if - else

if (a % 2 == 0) {
    console.log('a jest parzyste');
    console.log('a stanowi ' + a / 2 + '-krotność 2');
} else {
    console.log('a jest nieparzyste');
    console.log('zobaczcie');
}

let i = 0;

while (i < 8) { // pętla while

    if (i % 2 == 0) {
        console.log(i + 'jest parzyste');
        console.log(i + 'stanowi ' + i / 2 + '-krotność 2');
    } else {
        console.log(i + 'jest nieparzyste');
    }

    i = i + 1;
}