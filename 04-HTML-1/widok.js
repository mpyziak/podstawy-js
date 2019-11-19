/* 
 * Zawiera wyłącznie sterowanie widokiem (modyfikowanie DOM)
 */

function wyswietlObliczonaLiczbe(wyswietlanaLiczba) {
    document.getElementById('wynikDzialaniaNaLiczbie').innerHTML = wyswietlanaLiczba;
}

function paintButton() {
    document.getElementById('demoKolorowania').style.color = "yellow";
    document.getElementById('demoKolorowania').style.backgroundColor = "darkblue";
    document.getElementById('demoKolorowania').style.backgroundColor = "darkblue";
    document.getElementById('demoKolorowania').style.borderTopColor = "blue";
    document.getElementById('demoKolorowania').style.borderLeftColor = "blue";
    document.getElementById('demoKolorowania').style.borderBottomColor = "midnightblue";
    document.getElementById('demoKolorowania').style.borderRightColor = "midnightblue";
}

function createAnimalTableRow(zwierze) {
    return '<tr>'
        + '<td>' + zwierze.nazwa + '</td>'
        + '<td>' + zwierze.groznosc + '</td>'
        + '</tr>';
}

function zbudujTabliceZwierzat(zwierzeta) {

    let output = '<thead> <tr>'
        + '<th>' + 'Nazwa' + '</th>'
        + '<th>' + 'Groźność' + '</th>'
        + '</tr> </thead>';
    output += '<tbody>';

    for (let zwierze of zwierzeta) {
        output += createAnimalTableRow(zwierze);
    }
    
    output += '</tbody>';
    return output;
}

function listCurrentAnimals(animals) {
    document.getElementById('wypisZwierzat').innerHTML = zbudujTabliceZwierzat(animals);
}