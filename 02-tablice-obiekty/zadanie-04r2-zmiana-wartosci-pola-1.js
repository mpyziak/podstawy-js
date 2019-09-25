// Zbigniew zdecydował się na operację zmiany płci i nazywa się teraz Roksana Ardeńska. Zaktualizuj bazę pracowników.

const DANE = require('./dane'); // ta sama baza pracowników

let pracownik;
let i = 0;

while (i < DANE.pracownicy.length) { // rozwiązanie jest lepsze, ponieważ nie jest wrażliwe na kolejność pracowników
    if (DANE.pracownicy[i].imie === 'Zbigniew') {
        pracownik = DANE.pracownicy[i];
    }
}

pracownik.imie = 'Roksana';
pracownik.nazwisko = 'Ardeńska';
pracownik.płeć = 'K';


console.log(pracownik);
console.log(DANE.spis[21]);
