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

    k = 5;
    while (k > 0) {
        output = output + ' ';
        k = k - 1;
    }

    console.log(output);

    // inkrementacja i
    i = i + 1;
}

i = 4;
while (i > 0) {

    output = '';

    k = 5 - i;
    while (k > 0) {
        output = output + ' ';
        k = k - 1;
    }

    k = 0;
    while (k < i) {
        output = output + '*';
        k = k + 1;
    }

    console.log(output);

    // dekrementacja i
    i = i - 1;
}
