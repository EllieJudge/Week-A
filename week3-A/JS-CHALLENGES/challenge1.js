// (1) Arrange these array items in alphabetical order and log myArray to the console

let myArray = ["Sam", "Dean", "Stuart", "Leona", "Jacob", "Dan"]

//Solution 1
function alphaSort() {
   let alphaSorted = myArray.sort()
   return alphaSorted
}
console.log(alphaSort())

//Solution 2
const alphaSort2 = () => myArray.sort()
console.log(alphaSort2())


//Sort function works well for strings but not numbers. For example...
let numberArray = ["25", "100", "30", "250", "42"]

function sortProblem() {
    let notSorted = numberArray.sort()
    return notSorted
}
console.log(sortProblem()) //'100', '25', '250', '30', '42' (because 2 is bigger than 1 etc)

//To fix this, need a function
function sortProblemFixed() {
    numberArray.sort(function (a, b){return a - b}) //this function here tells it the ascending or descending order
    console.log(numberArray)
}
sortProblemFixed();//'25', '30', '42', '100', '250' (ascending)

function sortProblemFixed2() {
    numberArray.sort(function (a, b){return b - a}) //this function here tells it the ascending or descending order
    console.log(numberArray)
}
sortProblemFixed2();//'250', '100', '42', '30', '25'(descending)

