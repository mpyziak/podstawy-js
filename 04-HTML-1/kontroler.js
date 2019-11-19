/* 
 * Zajmuje się odbieraniem poleceń,
 * przekazywaniem zparametryzowanych poleceń do modelu,
 * decydowaniem, jaka część widoku jest odpowiedzialna za wyświetlenie
 * 
 * Kontroler MOŻE uzależniać wywołanie danej metody z widoku
 * na podstawie otrzymanej odpowiedzi modelu.
 * Kontroler NIE MOŻE uzależniać wywołanej metody modelu
 * na podstawie analizowania otrzymywanych danych.
 * 
 * Po namyśle i konsultacjach nasłuchiwanie kliknięcia i pobór wartości
 * zostały przeniesione do kontrolera.
 */

function przeprocesujLiczbe(podanaLiczba) {
    let odpowiedzDoWidoku = podniesDoKwadratu(podanaLiczba);
    wyswietlObliczonaLiczbe(odpowiedzDoWidoku);
}

function pobierzLiczbe() {
    let podanaLiczba = document.getElementById('podawanaLiczba').value;
    przeprocesujLiczbe(podanaLiczba);
}

function magageButtonColour() {
    paintButton();
}

function addAnimalToList() {
    let addedAnimal = {
        nazwa: document.getElementById('nazwaZwierzecia').value,
        groznosc: document.getElementById('groznoscZwierzecia').value
    }
    addAnimal(addedAnimal);
    listCurrentAnimals(getAnimals());
}

function clearAnimalList() {
    clearAnimals();
    listCurrentAnimals(getAnimals());
}

document.getElementById('odpalaczPobieraniaLiczby').addEventListener('click', pobierzLiczbe);
document.getElementById('demoKolorowania').addEventListener('click', magageButtonColour);
document.getElementById('dodajZwierzeBtn').addEventListener('click', addAnimalToList);
document.getElementById('wyczyscZwierzetaBtn').addEventListener('click', clearAnimalList);