// znajdź najcięższy skład wśród podanych pociągów
// uwaga - wagony pasażerskie i towarowe różnią się sposobem przechowywania masy wagonu

const DANE = require('./dane');

let zuege = DANE.pociagi;

let i = 0;
let zug = zuege[0];
let heaviestZug = zug;
let zugMass;

// obliczanie masy pierwszego składu
let k = 0;
let waggon;
zugMass = zug.zugmaschine.dienstgewicht;
while (k < zug.waggons.length) {

    waggon = zug.waggons[k];
    if (waggon.waggonTyp === 'Personenwagen') { // różnicujemy obliczenia w najprostszy możliwy sposób
        zugMass += waggon.dienstgewicht;
    } else {
        zugMass += waggon.leermasse + waggon.ladungsmasse;
    }

    k++;
}

// zapisujemy sobie masę pierwszego składu, by go co chwila nie obliczać
let heaviestZugMass = zugMass;

// szukamy najcięższego składu
while (i < zuege.length) {

    zug = zuege[i];

    k = 0;
    zugMass = zug.zugmaschine.dienstgewicht;
    while (k < zug.waggons.length) {

        waggon = zug.waggons[k];
        if (waggon.waggonTyp === 'Personenwagen') {
            zugMass += waggon.dienstgewicht;
        } else {
            zugMass += waggon.leermasse + waggon.ladungsmasse;
        }

        k++;
    }

    // zapisujemy nowy najcięższy pociąg oraz jego masę
    if (zugMass > heaviestZugMass) {
        heaviestZug = zuege[i];
        heaviestZugMass = zugMass;
    }

    i++;
}

console.log('Najcięższy pociąg to pociąg z id ' + heaviestZug.id);
