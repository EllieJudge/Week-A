// Challenge 4:
// Create a variable called num.
// Check if the number is a palindrome (looks the same
// forward as it does backwards e.g. 1001 or 20202).

//CLUE:
//"myString".split("").reverse().join("")

// let word = 'cat';

// function reverse(word) {
//     wordReverse = word.split('').reverse().join('');
//     return wordReverse;
// }
// console.log(reverse(word))

// function palindromeCheck() {
// if (wordReverse == word) {
//     console.log('palindrome')
// }
// console.log(palindromeCheck(word))

//let word = 'elle';

function palindrome (word) {
    wordReverse = word.split('').reverse().join('');
    if (wordReverse == word) {
        return ['Its a palindrome!', wordReverse]
    }
    else {
        return ['Its a palindrome!', wordReverse]
    }
    //return wordReverse;
}
let isIt = palindrome('Ellie')[0]
let newVar = palindrome('Ellie')[1]
//console.log(newVar)


//Return  statements! 
//can only return one thing in a func (so if want to return many things add to an array)
//exit the func where the return is
//can only be seen if you console.log the function
const hiEllie = () => {
    console.log("hi ellie")
    console.log("hi ellie")
    console.log("hi ellie")
    console.log("hi ellie")
    return 'hello'
}
let myVar = hiEllie()
console.log(myVar)