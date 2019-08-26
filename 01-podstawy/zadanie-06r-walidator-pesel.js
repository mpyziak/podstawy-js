let PESEL = 74101705204;

// określenie płci
let sex = PESEL % 100; // abcdefghij -> ij
sex = (sex - sex % 10) / 10; // zamiana ij na i0, a potem na i

if (sex % 2 == 0) {
    console.log('PESEL należy do kobiety');
} else {
    console.log('PESEL należy do mężczyzny');
}
