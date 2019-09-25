// Zbliża się dzień kobiet. Oblicz, po ile muszą zrzucić się mężczyźni, by kobiety dostały po bukieciku za 12zł

const DB = require('./dane');
const BOUQET_COST = 12;

let i = 0;
let womanCounter = 0;
let manCounter = 0;
let employee;

while (i < DB.pracownicy.length) {

    employee = DB.pracownicy[i]; // przypisanie wykonane *wyłącznie* dla poprawienia czytelności kodu

    if (employee.płeć === 'K') {
        womanCounter++;
    } else {
        manCounter++;
    }

    i++;
}


let flowersCost = womanCounter * BOUQET_COST;
let whiproundValue = flowersCost / manCounter;

console.log('Panowie muszą zrzucić się po ' + whiproundValue + 'zł.');
