// //for loop lists 0 to 9
for (i=0; i<10; i++){
    console.log(i)
}

// //logs the length of characters
console.log('EleanorRoseJudge 100'.length)

console.log("hello".toUpperCase())
console.log("HIIIIIIII".toLowerCase())

//trim method chops off white space on either side of a thing
console.log("     Hii    ")
console.log("     Hii    ".trim())

// //person object
let person = {
    name: 'Ellie',
    age: 27,
    pet: 'cat'
}
console.log(person)


let array1 = "Ellie "
let array2 = "Judge "
let array3 = "Smelly "
let array4 = "Laa"
console.log(array1.concat(array2, array3, array4))

// //this function finds the character at index 2 in "Hello"
function myfunc() {
let string = "Hello"
let index = string.charAt(2)
console.log(index)
}
myfunc()

console.log("Word".charAt(0)) //logs character at index whatever
console.log("Hello".includes('z'))//returns true or false if includes whatever
console.log("Hello".indexOf('e'))//tells us what index whatever char is
console.log("Hello".replace('l', 'a'))//replaces l with a or whatever

//Random Number Generator!
console.log(Math.ceil(Math.random()*40 + 100));
console.log(Math.floor(Math.random()*40 + 100));



console.log("All around the World".toUpperCase())
console.log("All around the World".charAt(7).toUpperCase())

//.concat links two variables together
let name = 'Ellie'
let sirName = 'Judge'

console.log(name.concat(sirName))

// let ie = 10;
// ie = 15
// const DOB = '08/12/1991';
// var j = 10;

// console.log(ie)
// console.log(j)
// console.log(DOB)

// let variable = "my name"
// variable = "new name"
// console.log(variable)

// const variable2 = "my constant"
// //variable2 = "new"
// //cant assign new value to a const!

// let b = 10;
// console.log(b)
// b += 5;
// console.log(b)
// b -= 5;
// console.log(b)
// b *= 5;
// console.log(b)
// b / 5;
// console.log(b)
// b++;
// console.log(b)
// b--;
// console.log(b)



// let coffeeOrder = 'cappucino '
// let price = 2
// console.log(coffeeOrder)

// console.log(coffeeOrder + price)

// console.log("Hi, I would like to order a " + coffeeOrder + " for the price of " + price + " pounds")


// let favouriteDrink = "gin";
// console.log("My favourite drink is " + favouriteDrink)

// favouriteDrink = "tea"

// let favouritePet = "Mr Nibbles"
// console.log(`My rabbit is called ${favouritePet} and he likes to drink ${favouriteDrink}`)

// let name = "Tilly";
// let age = 7;
// let colour = "red";

// console.log(`${name} is ${age}. ${name}'s favourite colour is ${colour}!`)


// let breakfast = "nothing";
// breakfast = "muesli"

// let lunch = "chips";
// lunch = "salad"

// let dinner = "something healthy, I hope"
// dinner = "stew"
// console.log(breakfast, lunch, dinner)




