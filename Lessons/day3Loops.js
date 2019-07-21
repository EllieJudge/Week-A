// let colours = [
//     'red',
//     'green',
//     'blue',
//     'yellow'
// ];

// for (let colourIndex=0; colourIndex<colours.length; colourIndex++) {
//     console.log(colours[colourIndex])
// }

// let array = []
// function findTheVowel (word) {
//     wordFindThe = word.split('')
//     array.push(wordFindThe)
//     //return array;
//     console.log(array)
// }
// console.log(findTheVowel('dog'));

// let chocs = [
//     'bounty',
//     'twix',
//     'crunchie'
// ];
// chocs.push('ripple', 'cadbury')
// console.log(chocs) //bounty, twix, crunchie
//console.log(chocs.push('ripple', 'cadbury'))//5
//console.log(chocs)
// for (let chocIndex=0; chocIndex<chocs.length; chocIndex++) {
//     console.log(chocs[chocIndex])
// }

// let cards = ['diamond', 'spade', 'heart', 'club'];
// let currentCard = 'sde';

// while (currentCard != 'spade'){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }
// console.log(currentCard);


// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let currentNumber = 7;

// while (currentNumber != 5){
//     console.log(currentNumber);
//     currentNumber = number[Math.floor(Math.random()*9)]
// }
// console.log(currentNumber)


// let filmArray = [
//     'film1',
//     'film2',
//     'ghostbusters',
//     'film4'
// ];

// for(let filmIndex = 0; filmIndex < filmArray.length; filmIndex++){
//     console.log(filmArray[filmIndex])
// }

// function filmCheck() {
//     if (filmArray[2] == 'ghostbusters'){
//         console.log('yay ghost');
//     }
//     else {
//         console.log('no')
//     }
// }
// filmCheck()


// let vegeArray = [
//     'tomato',
//     'banana',
//     'avocado',
//     'baked beans'
// ];

// function vegeCheck() {
//     if(vegeArray[2] == 'avocado') {
//         console.log('yaaas')
//     }
//     else {
//         console.log('tits')
//     }
// }
// vegeCheck()


// Challenge 6:
// Take the string
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
// Find the index of a last vowel in the string.

// let string = 'Eleanor Judge';
// let index = string.lastIndexOf('d') 
// console.log(index)//10

// let stringToArray = string.split('')
// console.log(stringToArray)

// for (i=0; i<stringToArray.length; stringToArray++) {
//     console.log(stringToArray[i])
// }

function func(str) {
    strToArray = str.split('')
    return strToArray
}
console.log(func('Alice'));

function check(strToArray){
    includes = strToArray.lastIndexOf('a')
    return includes  
}
console.log(check('Alice'))


// while (string = index) {
//     console.log(string)
// }

//let vowels = ['a','e','i','o','u']

// function myFunction() {
//     stringToArray = string.split('');
//     console.log(stringToArray);
//     return stringToArray;
// }
// myFunction();



