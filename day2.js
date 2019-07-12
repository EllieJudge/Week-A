let myMusic = "Rock n rollll"
let yourMusic = "Some indie crap"

let music = yourMusic; 

if (music == myMusic) {
    console.log("Good choice!");
}
else if (music == yourMusic) {
    console.log("Oh no it's indie again!");
} 
else {
    (console.log("Peace and quiet"))
}

let num = 10;

if (num >= 12) {
    console.log("It's bigger");
}
else {
    console.log("It's smaller")
}



console.log(num % 5)

let num1 = 9;
//console.log(num1 % 5 == 0)

if (num1 % 5 == 0) {
    console.log("No remainder");
}
else {
    console.log("There is a remainder");
}

let age = 19;

if (age > 17) {
    console.log("Yes, I can serve you.");
}
else {
    console.log("You aren't old enough, soz.")
}

let age2 = 19;
let country = "auz";

if (age > 17 && country == "UK") {
    console.log("Yes, I can serve you.");
}
else {
    console.log("I can't serve you, soz.")
}

let day = "Saturday";

if (day == "Saturday" || day == "Sunday") {
    console.log("It's the weekend baby!");
}
else {
    console.log("When's the weekend?")
}

let sister = "Emily";
let sister2 = "Alice";

if (sister == "Emily" && sister2 == "Alice") {
    console.log("Power of three!")
} else if (sister == "Emily" || sister2 == "Alice"){
    console.log("Sister love!")
}
else {
    console.log("Stranger-danger")
}


//Challenge 1
let password = "password";

if (password.length < 8) {
    console.log("Password is too short")
}
else {
    console.log(password)
}


//Challenge 2
let number = 2;

if (number % 3 == 0 || number % 5 == 0) {
    console.log("The number is divisible by 3 or 5");
}
else {
    console.log("This number is not divisible by 3 or 5");
}


//Challenge 3
let myNumber = 15;
 
if (myNumber % 3 == 0 && myNumber % 5 == 0) {
    console.log("Fizz buzz")
}
else if (myNumber % 5 == 0) {
    console.log("Buzz")
} 
else if (myNumber % 3 == 0) {
    console.log("Fizz")
}
else {
    console.log(myNumber)
}
//Challenge 4
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   console.log(palindrome("A man, a plan, a canal. Panama"));

//Challenge 5

let time = 9;
let placeOfWork = 'Code Nation';
let townOfHome = 'Chorlton';

if (time == 9) {
    console.log(`Cycling to ${placeOfWork}`)
} 
else if (time > 9 && time < 18) {
    console.log(`Working at ${placeOfWork}`)
}
else if (time > 18 && time < 23) {
    console.log(`Probably at the pub somewhere in ${townOfHome}`)
}
else if (time > 23 || time < 9) {
    console.log("Shh, sleeping.")
}
else {
    console.log("Is it the weekend?")
}

//Challenge 5 with switch
let timeSwitch = 9;

switch (timeSwitch) {
    case 9:
    case 10:
    case 11:
    case 12:
    console.log(`At ${placeOfWork}`)
    break;

    case 12.30:
    case 13:
    case 14:
    console.log(`Having lunch`)

    case 19:
    console.log(`In ${townOfHome}`)
    break;

    case 23:
    console.log(`In bed`)
}

//Challenge 6

//const vowels = ['a', 'e', 'i', 'o', 'u'];

// function countVowels (str) {
//     for (i = str.length; i >= 0; i--) {
//         if (str.charAt(i) == 'a') {
//             console.log(`a is at index ${i}`)
//         }
//         else if (str.charAt(i) == 'e') {
//             console.log(`e is at index ${i}`)
//         }
//         else if (str.charAt(i) == 'i') {
//             console.log(`i is at index ${i}`)
//         }
//         else if (str.charAt(i) == 'o') {
//             console.log(`i is at index ${i}`)
//         }
//     }
// }
// console.log(countVowels('Hello There'))
//console.log(string.lastIndexOf('e'))

function myFunction(str) {
    var str = "Visit W3Schools!"; 
    var n = str.search('a', 'e', 'i', 'o', 'u');
   console.log(n)
  }
console.log(myFunction('Visit W3Schools!'))


//Challenge 7

//Challenge 8 



let space1 = 'x';
let space2 = 'x';
let space3 = 'o';


let space4 = 'o';
let space5 = 'x';
let space6 = 'o';
let space7 = 'x';
let space8 = 'o';
let space9 = 'x';

    console.log(`   |   |   `)
    console.log(` ${space1} | ${space2} | ${space3}`)
    console.log(`   |   |   `)
    console.log(`------------`)
    console.log(`   |   |   `)
    console.log(` ${space4} | ${space5} | ${space6}`)
    console.log(`   |   |   `)
    console.log(`------------`)
    console.log(`   |   |   `)
    console.log(` ${space7} | ${space8} | ${space9}`)
    console.log(`   |   |   `)
    console.log(`------------`)

// if (space1 == 'o' && space2 == 'o' && space3 == 'o') {
//     console.log('winner');
// } else if (space1 == 'x' && space2 == 'x' && space3 == 'x') {
//     console.log('winner');
// } else {
//     console.log('loser')
// }

if (space1 === space2 && space1 === space3) {
    console.log('winner');
} else {
    console.log('loser');
} 



//ticket machine 

let ageForCinema = 0;

if (ageForCinema < 18) {
    console.log("Ticket for under 18s/kids = £8")
}
else if (ageForCinema >= 60) {
    console.log("Senior ticket price = £7.50")
}
else {
    console.log("Ticket price for adults = £10.95")
}

