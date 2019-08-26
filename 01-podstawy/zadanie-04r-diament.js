let FIGURE_SIZE = 5;

let output;
let i;
let k;
let figureLowerHalf = FIGURE_SIZE - 1;

i = 0;
while (i < FIGURE_SIZE) {

    output = '';

    k = 0;
    while (k < FIGURE_SIZE - 1 - i) {
        output = output + ' ';
        k = k + 1;
    }

    k = 0;
    while (k < i) {
        output = output + '*';
        k = k + 1;
    }

    output = output + '*';

    k = 0;
    while (k < i) {
        output = output + '*';
        k = k + 1;
    }

    console.log(output);
    i = i + 1;
}

i = figureLowerHalf;
while (i > 0) {

    output = '';

    k = 0;
    while (k <= figureLowerHalf - i) {
        output = output + ' ';
        k = k + 1;
    }

    k = i - 1;
    while (k > 0) {
        output = output + '*';
        k = k - 1;
    }

    output = output + '*';

    k = i - 1;
    while (k > 0) {
        output = output + '*';
        k = k - 1;
    }
    
    console.log(output);
    i = i - 1;
}