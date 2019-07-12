// let goodTaste = true;
// let enoughMoney =! true;

// function myFunc() {
//     console.log("Try pressing chocolate and then esspresso in the coffee machine")
//     if (goodTaste == true && enoughMoney == true) {
//         return "You're in for a good time!"
//     }
//     else {
//         return "What is instead of an else?"
//     }
// }
// console.log(myFunc());


// function myFunc2 (money, taste) {
//     if (money == true && taste == true) {
//         console.log('good time')
//     }
//     else {
//         console.log('no')
//     }
// }
// myFunc2(true, false);





let userInput;
let money = 200;
let chocolate = 13;
let espresso = 13;

function espressoFunc() {
    userInput = prompt("How many Espressos would you like?")
    money -= userInput * espresso 
    alert(`You now have £${money} left.`)
}

function chocolateFunc() {
    userInput = prompt("How many Hot Chocolates would you like?")
    money -= userInput * chocolate
    alert (`You now have £${money} left.`)
}

console.log(money)

function thisFunction() {
   userInput = prompt("What drink would you like? \n1. Hot Chocolate \n2. Espresso")
    if (userInput == 1) {
        chocolateFunc()
    } 
    else if (userInput == 2){
        espressoFunc()
    }
    console.log(money)
}
thisFunction()


