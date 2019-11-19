/* 
 * Zawiera wyłącznie działanie na danych (logikę).
 * Z założenia powinien działać z dowolnym kontrolerem
 * zgodnym z API modelu
 * 
 * W najprostszej wersji trzyma w sobie własne dane
 */

let allEnteredAnimals = [];

function podniesDoKwadratu(podnoszonaLiczba) {
    return podnoszonaLiczba * podnoszonaLiczba;
}

function addAnimal(animal) {
    allEnteredAnimals.push(animal);
}

function getAnimals() {
    return allEnteredAnimals;
}

function clearAnimals() {
    allEnteredAnimals.splice(0);
}