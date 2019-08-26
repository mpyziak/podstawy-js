// baza: stary skrypt generujący liczby pierwsze; modyfikacji - nie aż tak dużo

let foundNumbersCount = 0;
let checkedNumber = 0;
let i = 1;
let divisorCount;


while (foundNumbersCount < 9) {

    // sprawdź liczbę dzielników liczby
    while (i <= checkedNumber) {
        if (checkedNumber % i == 0) {
            divisorCount = divisorCount + 1;
        }
        i = i + 1;
    }

    // jeżeli liczba jest pierwsza, odnotuj to i narysuj co trzeba
    if (divisorCount == 2) {
        foundNumbersCount = foundNumbersCount + 1;

        let output = checkedNumber + ': ';
        let k = 1;

        // budujemy output
        while (k <= checkedNumber) {

            output = output + '|';
            if (k % 5 == 0) { // dodaj przerwę co 5 kresek
                output = output + ' ';
            }

            k = k + 1;
        }

        console.log(output);
    }

    // przygotowanie do następnej iteracji
    divisorCount = 0;
    i = 1;
    checkedNumber = checkedNumber + 1;
}
