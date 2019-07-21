// Challenge 6:
// Take the string
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
// Find the index of a last vowel in the string.

//first, find index of last character in string
let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';

let lastA = string.lastIndexOf('a')
console.log(lastA)

let lastE = string.lastIndexOf('e');
console.log(lastE)

let lastI = string.lastIndexOf('i');
console.log(lastI)

let lastO = string.lastIndexOf('o');
console.log(lastO)

let lastU = string.lastIndexOf('u');
console.log(lastU)

//Attempt at this as a function
let vowel = 'i';
let string2 = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';

switch (vowel) {
    case 'a':
    let indexA = string2.lastIndexOf('a')
    console.log(`The index of a is ${indexA}`)
    break

    case 'e':
    let indexE = string2.lastIndexOf('e')
    console.log(`The index of e is ${indexE} and this is exciting!`)
    break

    case 'i':
    let indexI = string2.lastIndexOf('i')
    console.log(`The index of i is ${indexI} and this is exciting!`)
    break

    case 'o':
    let indexO = string2.lastIndexOf('o')
    console.log(`The index of o is ${indexO} and this is the best day ever!`)
    break

    case 'u':
    let indexU = string2.lastIndexOf('u')
    console.log(`The index of u is ${indexU} and I am a genius!`)
    break
}


let stringX = 'kitten';

for (i=0; i<stringX.length; i++){
    console.log(i)
}