//Attempt at just having one card that continually updates (game 3 lol)
let stored;

function randomFunc() {
    let number = Math.ceil(Math.random() * 10);
    return number;
}

function checkCards(n1, n2) {
    alert(`First number was ${n1}. Second number is ${n2}`);
    if (userInput == 1 && n1 >= n2) { //winning option
        alert(`You win, this round!`);    
    } else {
        alert(`You lose, suckaaa.`)    
    }
}

function playAgain() {
    userInput = prompt(`Play again? \n1. Yes \n2. No`);
    if (userInput == 1) {
        run();
    } else {
        alert("Oh bugger off, then.");
    }
}

function run() {
    let num1 = randomFunc();
    stored = randomFunc();
    userInput = prompt(`First random number = ${num1}. Do you bet \n1. Higher or \n2. Lower?`)
    console.log(`UI = ${userInput}`);
    checkCards(num1, stored);
    stored = num1;
    playAgain();
}
run()
