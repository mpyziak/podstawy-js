// funkcja, która będzie liczyć średnią wszystkich elementów tablicy

function preprocess(assumedArray) {

    let elements = assumedArray.split(',');
    for (let i = 0; i < elements.length; i++) {
        elements[i] = +elements[i];
    }

    return elements;
}


function avg(input) {

    let sum = 0;
    for (num of input) {
        sum += num;
    }

    return sum / input.length;
}

function process(input) {

    input = preprocess(input);
    let output = avg(input);

    console.log(output);
}


const prompt = require('./prompter');

prompt.prompter(process);