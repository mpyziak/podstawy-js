// Zbigniew zdecydował się na operację zmiany płci i nazywa się teraz Roksana Ardeńska. Zaktualizuj bazę pracowników.

const DANE = require('./dane'); // ta sama baza pracowników

let pracownik = DANE.pracownicy[21];
pracownik.imie = 'Roksana';
pracownik.nazwisko = 'Ardeńska';
pracownik.płeć = 'K';

console.log(pracownik);
console.log(DANE.pracownicy[21]);
