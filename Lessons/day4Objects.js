//Objects
//containers for data, arrays, funcs, bools etc
//key-val pairs = colour:red
// let offer = "none";
// let time2 = 1200;

// const cafe = {
//     name: "Rainbow Sheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappucino",
//         "Latte",
//         "Hot Choc",
//         "Tea"
//     ],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sarny",
//     none: "Sorry no offer",
// openCafe(){
//   if(this.hasSpecialOffers){
//     return "Time for a special offer!";
//   }
// },
// closeCafe() {
//   return "We are closed, come back tomorrow!";
// }
// };
// console.log(cafe.openCafe());


// if (time2 < 1100) {
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time2 < 1500) {
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer)
// }


// let happy = true;
// let time = 1200;


// const person = {
//     name: "Ellie",
//     age: 12,
//     favouriteColour: "Red",
//     favouriteDay: "Saturday",
//     favouriteFoods: [
//         "Burritos",
//         "Chinese Food",
//         "Chocolate"
//     ],
//     hasADog: false,
//     havingAGoodDay: "happy",
//       sayHi() {
//         return (`Hi my name is ${this.name}`)
//       },
//       sayBye() {
//         return(`I am not having a ${this.havingAGoodDay} day. Goodbye.`)
//       }
      
// }

// console.log(person.sayBye());

// console.log(person)
// console.log(person.favouriteFoods[1])
// console.log(person.name)
// console.log(person.favouriteColour)
// console.log(person["age"])

// if (time == 1200 && happy == true) {
//     console.log(`${person.name} is ${person.havingAGoodDay}`)
// }
// else {
//     console.log("Not so good")
// }


// let day = "Saturday";

// const alarm = {
//     weekendAlarm: "No alarm needed.",
//     weekdayAlarm: "Get up at 8"
// }
// if (day == "Saturday" || day == "Sunday") {
//     console.log(`Set alarm to ${alarm.weekendAlarm}`) 
//       } else if (day == alarm.weekdayAlarm) {
//         console.log(`Set alarm to ${alarm.weekdayAlarm}`)
//       } else {
//         console.log("Set your alarm, woman!")
//       }
       
    
// let time = "morning"
// let rabbit = ""

// const pet = {
//   typeOfPet: "rabbit",
//   mood: "hungry",
//   age: 9,
//   colour: "white with black spots",
//   name: "Mr Nibbles",
//     feed() {
//       if (this.mood == "hungry" && time == "morning"){
//         return `${this.name} is ${this.mood}, feed him.`
//       }
//     },
//     water() {
//       return `Your pet is thirsty.`
//     }
// }
// console.log(pet.water())
// console.log(pet.feed())


let mood = "Happy"

const powerOfThree = {
    sisterName: "Emily",
    sister2Name: "Alice",
    age: 25,
    food: "Eats everything",
    olderSis: "Ellie",
      hangOut() {
        if (this.sisterName == "Emily" || this.sister2Name == "Alice" && mood == "Happy"){
          return `Power of Three! Sister love!`
        }},
      runAway() {
        if(this.sisterName == "Emily" && this.sister2Name == "Alice" && mood == "Hungry!") {
          return "Run for your life!"
        }
        else{
          return "Find food quickly!!"
        }
      }
}
console.log(powerOfThree.runAway())