let num1;
let num2;

function randomFunc1() {
    num1 = Math.ceil(Math.random() * 10);
    console.log(num1);
}

function randomFunc2() {
    num2 = Math.ceil(Math.random() * 10);
    //console.log(num2);
}

function checkCards() {

    alert(`First number was ${num1}. Second number is ${num2}`);

    if (userInput == 1 && num2 > num1) { //winning option
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
        alert("Oh bugger off, then.")
    }
}

function run() {
    randomFunc1();
    randomFunc2();
    userInput = prompt(`First random number = ${num1}. Do you bet \n1. Higher or \n2. Lower?`)
    console.log(`UI = ${userInput}`)
    checkCards();
    playAgain();
}
run()