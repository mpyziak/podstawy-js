// odwróć tablicę
let input = ['ludzie', 'powinni', 'żyć', 'pracą', 'nie', 'rodziną'];

let i = 0;
let output = [];
let zmiennaPomocnicza;

while (i < input.length) {

    zmiennaPomocnicza = input.length - i - 1;
    output[zmiennaPomocnicza] = input[i];
    i++;
}

console.log(output);
