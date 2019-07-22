// (4) Write a function that takes one array as a parameter 
// and returns a random item out of the array.

//One solution (without param)
// let array = ["banana", "kitten", "puppy dog", "Alex"];

// function randomPick() {
//     let randomItem = array[Math.floor(Math.random()*array.length)]
//     return randomItem
// }
// console.log(randomPick())

//Solution using param
function randomPick(array2) {
    return array2[Math.floor(Math.random()*array2.length)]
}
console.log(randomPick(["banana", "kitten", "puppy dog", "Alex"]))


//Another simple solution
// let myArray = ["one", "two", "three", "four"]

// console.log(myArray[Math.floor(Math.random()*myArray.length)])