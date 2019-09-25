// Ponieważ ktoś wpadł na głupi pomysł trzymania wieku zamiast daty urodzenia,
// co sylwestra trzeba 'ręcznie' aktualizować wiek pracowników.
// zaktualizuj wiek wszystkich pracowników.

const DANE = require('./dane'); // ta sama baza pracowników

let i = 0;
let consoleOutput;
let pracownik;

while (i < DANE.pracownicy.length) {

    pracownik = DANE.pracownicy[i];
    consoleOutput = pracownik.imie + ': ' + pracownik.wiek;

    pracownik.wiek++; // clue zadania, reszta to wodotryski

    consoleOutput = consoleOutput + ' => ' + pracownik.wiek;
    console.log(consoleOutput);

    i++;
}
