var coinFlip = Math.round(Math.random()) + 1;
var choice = prompt("Heads or Tails");

if (coinFlip == 1) {
    var flipResult = "heads";
} else {
    var flipResult = "tails";
}
if (flipResult == choice) {
    if (flipResult == "heads") {
        alert('The flip was heads and you chose heads...you win!');
    } else {
        alert('The flip was tails and you chose tails...you win!');
    }
} else {
    if (flipResult == "heads") {
        alert('The flip was heads and you chose tails...you lose!');
    } else {
        alert('The flip was tails and you chose heads...you lose!');
    }
}