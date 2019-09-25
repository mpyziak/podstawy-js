// sprawdź, czy tablice zawierają liczbę 42. Zwróć true, jeżeli tak; zwróć false, jeżeli nie

const TABLICA_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const TABLICA_2 = [34, 43, 43, 43, 44, 43, 43, 44, 43, 44, 34, 24, 43];
const TABLICA_3 = [34, 43, 43, 42, 43, 43, 44, 44, 43, 41, 34, 54, 43];
const TABLICA_4 = [34, 43, 43, 46, 43, 42, 43, 44, 43, 44, 34, 24, 43];
const TABLICA_5 = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
const TABLICA_6 = [TABLICA_1[0] + TABLICA_3[9], TABLICA_2[2] + TABLICA_5[2]];

// pisanie kilkakrotnie tego samego kodu to oczywiście nic dobrego, zróbmy więc taki trik:
let i = 0;
const tablice = [TABLICA_1, TABLICA_2, TABLICA_3, TABLICA_4, TABLICA_5, TABLICA_6];

let k;
let contains42;

while (i < tablice.length) {
    k = 0;
    contains42 = false;

    while (k < tablice[i].length) {
        if (tablice[i][k] === 42) {
            contains42 = true;
        }

        k++;
    }

    /*
     * uwaga, i++ we wrednym miejscu! owszem, legalnym:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment
     * legalnym ale tragicznie nieczytelnym, co tutaj próbuję zademonstrować.
     * Inkrementacja powinna być wykonywana w osobnej linii w 95% przypadków.
     */
    console.log('Tablica ' + i++ + ': ' + contains42);
}
