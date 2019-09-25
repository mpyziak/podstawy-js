exports.pracownicy = [
    { id: 1, imie: 'Anna', nazwisko: 'Siewierowna', wiek: 23, płeć: 'K' },
    { id: 2, imie: 'Beata', nazwisko: 'Czapura', wiek: 45, płeć: 'K' },
    { id: 3, imie: 'Cezary', nazwisko: 'Żak', wiek: 24, płeć: 'M' },
    { id: 4, imie: 'Dezydery', nazwisko: 'Chłapowski', wiek: 64, płeć: 'M' },
    { id: 5, imie: 'Elżbieta', nazwisko: 'Falklandzka', wiek: 52, płeć: 'K' },
    { id: 6, imie: 'Filip', nazwisko: 'Zdobywca', wiek: 57, płeć: 'M' },
    { id: 7, imie: 'Grażyna', nazwisko: 'Jasińska', wiek: 62, płeć: 'K' },
    { id: 8, imie: 'Herbert', nazwisko: 'Grönemeyer', wiek: 63, płeć: 'M' },
    { id: 9, imie: 'Irmina', nazwisko: 'Thun', wiek: 54, płeć: 'K' },
    { id: 10, imie: 'Jadwiga', nazwisko: 'Sileska', wiek: 42, płeć: 'K' },
    { id: 11, imie: 'Krzysztof', nazwisko: 'Kolumb', wiek: 23, płeć: 'M' },
    { id: 12, imie: 'Ludmiła', nazwisko: 'Opieńka', wiek: 41, płeć: 'K' },
    { id: 13, imie: 'Maksymilian', nazwisko: 'Kolbe', wiek: 42, płeć: 'M' },
    { id: 14, imie: 'Natalia', nazwisko: 'Alikorn', wiek: 55, płeć: 'K' },
    { id: 15, imie: 'Olgierd', nazwisko: 'Pietrzak', wiek: 24, płeć: 'M' },
    { id: 16, imie: 'Piotr', nazwisko: 'Pechowy', wiek: 34, płeć: 'M' },
    { id: 17, imie: 'Regina', nazwisko: 'Chłop', wiek: 26, płeć: 'K' },
    { id: 18, imie: 'Stefan', nazwisko: 'Burczymucha', wiek: 49, płeć: 'M' },
    { id: 19, imie: 'Tadeusz', nazwisko: 'Soplica', wiek: 44, płeć: 'M' },
    { id: 20, imie: 'Urszula', nazwisko: 'Danielewicz', wiek: 22, płeć: 'K' },
    { id: 21, imie: 'Władysław', nazwisko: 'Żyżyżkiewicz', wiek: 32, płeć: 'M' },
    { id: 22, imie: 'Zbigniew', nazwisko: 'Ardeński', wiek: 33, płeć: 'M' }
]

exports.pociagi = [
    {
        id: 1,
        zugmaschine: { name: 'SP42', dienstgewicht: 70, laenge: 14.2 },
        waggons: [
            { name: '152A', waggonTyp: 'Personenwagen', wagenklasse: 2, dienstgewicht: 55, laenge: 26, passagiere: 80 },
            { name: '152A', waggonTyp: 'Personenwagen', wagenklasse: 2, dienstgewicht: 55, laenge: 26, passagiere: 80 },
            { name: '152Aa', waggonTyp: 'Personenwagen', wagenklasse: 1, dienstgewicht: 52, laenge: 26, passagiere: 60 }
        ]
    },
    {
        id: 2,
        zugmaschine: { name: 'SM42', dienstgewicht: 70, laenge: 14.2 },
        waggons: [
            { name: '408W', waggonTyp: 'Güterwagen', leermasse: 21.8, laenge: 14, tragfaehigkeit: 58, ladungsmasse: 0 },
            { name: '408W', waggonTyp: 'Güterwagen', leermasse: 21.5, laenge: 14, tragfaehigkeit: 58, ladungsmasse: 0 },
            { name: '408W', waggonTyp: 'Güterwagen', leermasse: 21.7, laenge: 14, tragfaehigkeit: 58, ladungsmasse: 0 },
            { name: '408W', waggonTyp: 'Güterwagen', leermasse: 21.7, laenge: 14, tragfaehigkeit: 58, ladungsmasse: 0 },
            { name: '408W', waggonTyp: 'Güterwagen', leermasse: 21.7, laenge: 14, tragfaehigkeit: 58, ladungsmasse: 0 },
            { name: '408W', waggonTyp: 'Güterwagen', leermasse: 21.7, laenge: 14, tragfaehigkeit: 58, ladungsmasse: 0 },
            { name: '408W', waggonTyp: 'Güterwagen', leermasse: 21.7, laenge: 14, tragfaehigkeit: 58, ladungsmasse: 0 }
        ]
    },
    {
        id: 3,
        zugmaschine: { name: 'EU44', dienstgewicht: 86, laenge: 19.6 },
        waggons: [
            { name: '152A', waggonTyp: 'Personenwagen', wagenklasse: 2, dienstgewicht: 55, laenge: 26, passagiere: 80 },
            { name: '152A', waggonTyp: 'Personenwagen', wagenklasse: 2, dienstgewicht: 55, laenge: 26, passagiere: 80 },
            { name: '152A', waggonTyp: 'Personenwagen', wagenklasse: 2, dienstgewicht: 55, laenge: 26, passagiere: 80 },
            { name: '152A', waggonTyp: 'Personenwagen', wagenklasse: 2, dienstgewicht: 55, laenge: 26, passagiere: 80 },
            { name: '152Aa', waggonTyp: 'Personenwagen', wagenklasse: 1, dienstgewicht: 52, laenge: 26, passagiere: 60 },
            { name: '152Aa', waggonTyp: 'Personenwagen', wagenklasse: 1, dienstgewicht: 52, laenge: 26, passagiere: 60 },
            { name: '152A', waggonTyp: 'Personenwagen', wagenklasse: 2, dienstgewicht: 55, laenge: 26, passagiere: 80 },
            { name: '152A', waggonTyp: 'Personenwagen', wagenklasse: 2, dienstgewicht: 55, laenge: 26, passagiere: 80 },
            { name: '152A', waggonTyp: 'Personenwagen', wagenklasse: 2, dienstgewicht: 55, laenge: 26, passagiere: 80 }
        ]
    },
    {
        id: 4,
        zugmaschine: { name: 'ST43', dienstgewicht: 118, laenge: 17.4 },
        waggons: [
            { name: '405R', waggonTyp: 'Kesselwagen', leermasse: 33.2, laenge: 12.3, tragfaehigkeit: 30.2, ladungsmasse: 24.1 },
            { name: '405R', waggonTyp: 'Kesselwagen', leermasse: 33.1, laenge: 12.3, tragfaehigkeit: 30.2, ladungsmasse: 24.2 },
            { name: '405R', waggonTyp: 'Kesselwagen', leermasse: 33.2, laenge: 12.3, tragfaehigkeit: 30.2, ladungsmasse: 24.0 },
            { name: '405R', waggonTyp: 'Kesselwagen', leermasse: 33.3, laenge: 12.3, tragfaehigkeit: 30.2, ladungsmasse: 24.2 },
            { name: '405R', waggonTyp: 'Kesselwagen', leermasse: 33.2, laenge: 12.3, tragfaehigkeit: 30.2, ladungsmasse: 24.3 },
            { name: '405R', waggonTyp: 'Kesselwagen', leermasse: 33.2, laenge: 12.3, tragfaehigkeit: 30.2, ladungsmasse: 24.2 },
            { name: '405R', waggonTyp: 'Kesselwagen', leermasse: 33.1, laenge: 12.3, tragfaehigkeit: 30.2, ladungsmasse: 24.0 },
            { name: '405R', waggonTyp: 'Kesselwagen', leermasse: 33.2, laenge: 12.3, tragfaehigkeit: 30.2, ladungsmasse: 24.2 },
            { name: '405R', waggonTyp: 'Kesselwagen', leermasse: 33.2, laenge: 12.3, tragfaehigkeit: 30.2, ladungsmasse: 24.1 },
            { name: '405R', waggonTyp: 'Kesselwagen', leermasse: 33.1, laenge: 12.3, tragfaehigkeit: 30.2, ladungsmasse: 24.2 },
            { name: '405R', waggonTyp: 'Kesselwagen', leermasse: 33.2, laenge: 12.3, tragfaehigkeit: 30.2, ladungsmasse: 24.0 },
            { name: '405R', waggonTyp: 'Kesselwagen', leermasse: 33.3, laenge: 12.3, tragfaehigkeit: 30.2, ladungsmasse: 24.2 },
            { name: '405R', waggonTyp: 'Kesselwagen', leermasse: 33.2, laenge: 12.3, tragfaehigkeit: 30.2, ladungsmasse: 24.3 },
            { name: '405R', waggonTyp: 'Kesselwagen', leermasse: 33.2, laenge: 12.3, tragfaehigkeit: 30.2, ladungsmasse: 24.2 },
            { name: '405R', waggonTyp: 'Kesselwagen', leermasse: 33.1, laenge: 12.3, tragfaehigkeit: 30.2, ladungsmasse: 24.0 },
            { name: '405R', waggonTyp: 'Kesselwagen', leermasse: 33.2, laenge: 12.3, tragfaehigkeit: 30.2, ladungsmasse: 24.2 }
        ]
    }
]
