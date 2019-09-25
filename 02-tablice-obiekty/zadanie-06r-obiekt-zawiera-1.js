// zwrócić liczbę pracowników mających 42 lata

const DB = require('./dane');

let i = 0;
let employeeCounter = 0;

while (i < DB.pracownicy.length) {
    if (DB.pracownicy[i].wiek === 42) {
        employeeCounter++;
    }
    i++;
}

console.log('Liczba pracowników mających 42 lata: ' + employeeCounter);
