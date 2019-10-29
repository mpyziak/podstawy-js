var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('input> ');

exports.prompter = (callback) => {
    rl.prompt();
    rl.on('line', function (line) {
        if (line === "exit") rl.close(); else callback(line);
        rl.prompt();
    }).on('close', function () {
        process.exit(0);
    });
};