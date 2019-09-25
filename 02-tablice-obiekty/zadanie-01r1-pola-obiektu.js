// wypisz do konsoli tylko te z podanych obiektów, które mają ustawione print: true

let a = { id: 1, name: 'Object a', validated: true, print: false };
let b = { id: 2, name: 'Object b', validated: false, print: true };
let c = { id: 3, name: 'Object c', validated: true, print: false };
let d = { id: 4, name: 'new object' };
let e = { id: 5, name: 'Object e+', validated: true, print: true };

if (a.print === true) {
    console.log(a);
}

if (b.print === true) {
    console.log(b);
}

if (c.print === true) {
    console.log(c);
}

if (c.print === true) {
    console.log(c);
}

if (c.print === true) {
    console.log(c);
}
