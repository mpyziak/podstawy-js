// wypis oczekiwanego wyniku - 15 pierwszych liczb pierwszych
console.log('wzór:')
console.log('2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47');


let output = '';
let foundNumbersCount = 0;
let checkedNumber = 0;
let i = 1;
let divisorCount;


while (foundNumbersCount < 15) {

    // sprawdź liczbę dzielników liczby
    while (i <= checkedNumber) {
        if (checkedNumber % i == 0) {
            divisorCount = divisorCount + 1;
        }
        i = i + 1;
    }

    // jeżeli liczba jest pierwsza, odnotuj to
    if (divisorCount == 2) {
        output = output + checkedNumber + ', ';
        foundNumbersCount = foundNumbersCount + 1;
    }

    // przygotowanie do następnej iteracji
    divisorCount = 0;
    i = 1;
    checkedNumber = checkedNumber + 1;
}

output = output.slice(0, output.length - 2);

// wypis wyniku
console.log('wynik działania programu:');
console.log(output);