var note = prompt('Are you ready to play the game?');


if (note == 'yes') {
    var choice = prompt('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.\n \nWhich direction would you like to head? (Please enter "forward", "left", or "right").');
} if (choice == "left") {
    prompt('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!');
} else if (choice == "forward") {
    prompt('You walk 100 yards and safely make your way out of the cave.');
} else if (choice == "right") {
    prompt('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!');
} else {
    prompt('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.')
}

if (note == 'no') {
    prompt('Thank you for your time, please come back and play again sometime');
}