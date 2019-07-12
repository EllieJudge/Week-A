let userInput;
let healthPoints = 100;

alert("Hello, don't panic.")
userInput = prompt("You panicked, didn't you?\n1. Yes\n2. No")
console.log(userInput)

if (userInput == "Yes" || userInput == 1 || userInput == "yes" || userInput == "1.")
{
    userInput = prompt("Oh, you're a big softie, aren't you?")
    console.log(userInput)
}
else if (userInput == "No" || userInput == 2 || userInput == "no" || userInput == "2.") 
{
    userInput = prompt("Well, we will make you panic by the end of this trip.. do you like clowns?")
    console.log(userInput)
}
else {
    fightFunction()
    alert("What did you just say to me?")
}

function fightFunction() {
    console.log("My function has worked. Chill.")
    healthPoints -= 100
    console.log(`Your health points are ${healthPoints}`)
}

