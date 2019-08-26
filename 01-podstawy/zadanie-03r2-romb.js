let output;
let i;
let k; // osobiście nie przepadam za j - jest zbyt podobne do i

i = 0;
while (i < 5) {

    output = '';

    k = 0;
    while (k <= i) {
        output = output + '*';
        k = k + 1;
    }

    k = 0;
    while (k <= 5 - i) {
        output = output + ' ';
        k = k + 1;
    }

    console.log(output);

    i = i + 1;
}

i = 0;
while (i < 4) {

    output = '';

    k = 0;
    while (k <= i) {
        output = output + ' ';
        k = k + 1;
    }

    k = 0;
    while (k < 4 - i) {
        output = output + '*';
        k = k + 1;
    }

    console.log(output);

    i = i + 1;
}
