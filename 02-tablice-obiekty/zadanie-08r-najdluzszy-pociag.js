// znajdź najdłuższy skład wśród podanych pociągów

const DANE = require('./dane');

let zuege = DANE.pociagi;

let i = 0;
let zug = zuege[0];
let longestZug = zug;
let zugLength;

// obliczanie długości pierwszego składu
let k = 0;
zugLength = zug.zugmaschine.laenge;
while (k < zug.waggons.length) {
    zugLength += zug.waggons[k].laenge;
    k++;
}

// zapisujemy sobie długość pierwszego składu, by go co chwila nie obliczać
let longestZugLength = zugLength;

// szukamy najkrótszego składu
while (i < zuege.length) {

    zug = zuege[i];

    k = 0;
    zugLength = zug.zugmaschine.laenge;
    while (k < zug.waggons.length) {
        zugLength += zug.waggons[k].laenge;
        k++;
    }

    // zapisujemy nowy najkrótszy pociąg oraz jego długość
    if (zugLength > longestZugLength) {
        longestZug = zuege[i];
        longestZugLength = zugLength;
    }
    
    i++;
}

console.log('Najdłuższy pociąg to pociąg z id ' + longestZug.id);
