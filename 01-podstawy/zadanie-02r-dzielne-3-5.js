let i = 1;
let output = '';

while (i < 100) {

    if (i % 3 == 0) {
        if (i % 5 == 0) {

            output = output + i + ', ';
        }
    }

    i = i + 1;
}

output = output.slice(0, output.length - 2); // usunięcie ostatnich dwóch znaków, przerobimy później

console.log(output);
