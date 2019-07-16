//Cash machine attempt 2 lols.
let userInput;
let pin = 1;
let balance = 20;
let depositAmount;
let run = false;

alert("Welcome...")

//check pin function
function checkPin() {
    userInput = prompt("Please enter your pin: ")
    if (userInput == pin) {
        alert("Pin correct.")
        run = true;
        menuOptions()
    }
    else{
        alert("Pin incorrect. Get lost. Fraud.")
    }
}
checkPin()

//if pin correct && run is true, menu option function
function menuOptions() {
    userInput = prompt("Would you like to \n1. Check your balance \n2. Withdraw moola \n3. Make a deposit \n4. Change your pin")
    if (userInput == 1) {
        checkBalanceFunc()
    } else if (userInput == 2) {
        withdrawMoolaFunc()
    } else if (userInput == 3) {
        makeDepositFunc()
    } else if (userInput == 4) {
        changePinFunc()
    } else alert("Does not compute. Bye.")
    run = false;
}
if (run){
    menuOptions();
}

//check user balance function
function checkBalanceFunc() {
    userInput = prompt(`Your balance is £${balance}. Would you like another service? \n1. Yes \n2. No`)
    if (userInput == 1) {
        menuOptions()
    } else if (userInput == 2) {
        alert("Oh sod off, then.")
        return run = false;
    } else {
        alert("Does not compute. Try again??")
        menuOptions()
    }
}

//withdraw suggested amount or enter own
function withdrawMoolaFunc() {
    userInput = prompt(`How much would you like to withdraw today? \n1. £5  \n2. £10 \n3. £20 \n4. £50 \n5. Other`)
    switch (userInput) {
        case "1":
            withdrawalSum(5);
            menuOptions();
            break;
        case "2":
            withdrawalSum(10);
            menuOptions();
            break;
        case "3":
            withdrawalSum(20);
            menuOptions();
            break;
        case "4":
        withdrawalSum(50);
        menuOptions();
        break;
        case"5":
        userInput = prompt("Enter amount: ")
        withdrawalSum(userInput)
        menuOptions();
        break;
    }
}

//calculates balance - withdrawal amount, exits if not enough moola
function withdrawalSum(moola) {
    if (balance < moola) {
        alert("You dont have enough money to withdraw that amount, kid. Sorry.")
       run = false
       return
    }
    balance = balance - moola
    alert(`You have withdrawn £${moola}. Your new balance is £${balance}`)
    menuOptions;
}

//add moola to your account
function makeDepositFunc() {
    userInput = prompt('How much would you like to deposit today?')
    balance = +balance + +userInput
    alert (`Your new balance is £${balance}`)
    menuOptions();
}

//enter pin to change pin
function changePinFunc() {
    userInput = prompt("To change pin, enter current pin")
    if (userInput==pin) {
        userInput = prompt("Now enter your new pin")
        pin = userInput;
        console.log(pin)
        checkPin()
    }
    else alert("Not authroised!!")
}