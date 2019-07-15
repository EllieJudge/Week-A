class Animal {
    constructor(name){
        this._name = name;
        this._hunger = 100;
        this._thirst = 100;
    }
    get name(){
        return this._name;
    }
    get hunger(){
        return this._hunger;
    }
    get thirst(){
        return this._thirst;
    }
    eat(){
        this._hunger--;
    }
    drink(){
        this._thirst--;
    }
}

class Rabbit extends Animal {
    constructor(name){
    super(name);
    this._hops = 0;
    }
    get hops(){
    return this._hops;
    }
    increaseHops(){
        return this._hops++;
    }
}
class Cat extends Animal {
    constructor(name){
    super(name);
    this._purrs = 0;
    }
    get purrs() {
        return this._purrs;
    }
    increasePurrs() {
        return this._purrs++;
    }
}
class Dog extends Animal {
    constructor(name){
    super(name);
    this._wags = 0;
    }
    get wags() {
        return this._wags;
    }
    increaseWags() {
        return this._wags++;
    }
}

const rabbit = new Animal("rabbit1")
const cat = new Animal("cat1")
const dog = new Animal("dog1")

function choosePet() {
    userInput = prompt(`Hello. Welcome to the petshop! Which type of pet would you like? 
    \n1. Rabbit \n2. Cat \n3. Dog`)
    if(userInput == 1 || userInput == "rabbit" || userInput == "Rabbit") {
        rabbitFunc()
    }
    else if(userInput == 2 || userInput == "cat" || userInput == "Cat"){
        pet = "cat";
    }
    else if (userInput == 3 || userInput == "dog" || userInput == "Dog"){
        pet = "dog";
    }
    else {
        alert("We don't have any of those...")
    }
    alert(`You chose a ${pet}!`)
}
choosePet()

function chooseName() {
    userInput = prompt(`What would you like to call your ${pet}?`)
    name = userInput;
    alert(`Your ${pet} is called ${name}!`)
}
chooseName()

function rabbitFunc() {
    prompt(`Would you like to \n1. Feed your rabbit \n2. Water your rabbit?`)
    if (userInput==1) {
        Animal.eat()
    }
}




