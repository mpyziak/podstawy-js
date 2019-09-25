// wypisz do konsoli tylko te z podanych obiektów, które mają ustawione print: true

let a = { id: 1, name: 'Object a', validated: true, print: false };
let b = { id: 2, name: 'Object b', validated: false, print: true };
let c = { id: 3, name: 'Object c', validated: true, print: false };
let d = { id: 4, name: 'new object' };
let e = { id: 5, name: 'Object e+', validated: true, print: true };

let abcde = [a, b, c, d, e];

let i = 0;
while (i < abcde.length) {
    if (abcde[i].print) { // sprawdzana wartość zwraca true lub false, więc sprawdzanie przez === jest zbędne
        console.log(abcde[i]);
    }
}
