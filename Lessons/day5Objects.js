let string = "string"
let number = 9
let bool = true

let array = [
    "item1",
    "item2",
    "item3",
    "item4"
]

console.log(array.push("item5"))
// console.log(array)

for (i = 0; i < array.length; i++) {
    console.log(array[i])
}

// let balance = 15;

// function withdrawAmount() {
//     console.log('Would you like to withdraw £5? Yes?? Ok then!');
//     balance = balance - 5;
//     console.log(`Your new balance is ${balance}`)
// }
// withdrawAmount()

let balance2 = 22;

function takeOutMoney(money) {
    console.log(`The amount you would like to withdraw is £${money}`);
    balance2 -= money;
    console.log(`Your new balance is £${balance2}. Goodbye.`)
}
takeOutMoney(2)