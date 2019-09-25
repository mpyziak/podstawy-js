// sprawdź, czy tablice zawierają liczbę 42. Zwróć true, jeżeli tak; zwróć false, jeżeli nie

const TABLICA_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const TABLICA_2 = [34, 43, 43, 43, 44, 43, 43, 44, 43, 44, 34, 24, 43];
const TABLICA_3 = [34, 43, 43, 42, 43, 43, 44, 44, 43, 41, 34, 54, 43];
const TABLICA_4 = [34, 43, 43, 46, 43, 42, 43, 44, 43, 44, 34, 24, 43];
const TABLICA_5 = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
const TABLICA_6 = [TABLICA_1[0] + TABLICA_3[9], TABLICA_2[2] + TABLICA_5[2]];

let i;
let contains42;

i = 0;
/*
 * contains42 działa jak flaga
 * 
 * Flag variable is used as a signal in programming
 * to let the program know that a certain condition was met.
 * It usually acts as a boolean variable indicating a condition to be either true or false.
 */
contains42 = false;

while (i < TABLICA_1.length) {
    if (TABLICA_1[i] === 42) {
        contains42 = true;
    }

    i++;
}
console.log('Tablica 1: ' + contains42);


i = 0;
contains42 = false;

while (i < TABLICA_2.length) {
    if (TABLICA_2[i] === 42) {
        contains42 = true;
    }

    i++;
}
console.log('Tablica 2: ' + contains42);


i = 0;
contains42 = false;

while (i < TABLICA_3.length) {
    if (TABLICA_3[i] === 42) {
        contains42 = true;
    }

    i++;
}
console.log('Tablica 3: ' + contains42);


i = 0;
contains42 = false;

while (i < TABLICA_4.length) {
    if (TABLICA_4[i] === 42) {
        contains42 = true;
    }

    i++;
}
console.log('Tablica 4: ' + contains42);


i = 0;
contains42 = false;

while (i < TABLICA_5.length) {
    if (TABLICA_5[i] === 42) {
        contains42 = true;
    }

    i++;
}
console.log('Tablica 5: ' + contains42);


i = 0;
contains42 = false;

while (i < TABLICA_6.length) {
    if (TABLICA_6[i] === 42) {
        contains42 = true;
    }

    i++;
}
console.log('Tablica 6: ' + contains42);
