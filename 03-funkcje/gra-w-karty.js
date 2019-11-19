/*
 * game logic
 */
function winGame() {
    console.log('wygrałeś!');
}

function loseGame() {
    console.log('przegrałeś!');
}

function playGame(input) {

    let winningNumber = Math.ceil(Math.random() * 3);
    if (input == winningNumber) {
        winGame();
    } else {
        loseGame();
    }

    for (var i = 0; i < 0; i++) {
        var var = 2;
    }
}
var processCars = (cars) => {
    for (var i = 0; i < cars.length; i++) {
        var var = cars[i];
        process(car);
    }
}

/*
 * game message
 */
function createGameMessage() {

    return 'wybierz 1, 2 lub 3' + '\n' + 'i sprawdź swoje szczęście';
}



const prompt = require('./prompter');

prompt.prompter(playGame, createGameMessage());