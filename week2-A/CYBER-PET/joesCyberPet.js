class Pets {
    constructor(name) {
    this._name = name
    this._hunger = 10
    this._thirst = 10
    this._happy = 5
    this._health = 10
    }
    get name() {
        return this._name
    }
    get food() {
        return this._hunger
    }
    get drink() {
        return this._thirst
    }
    giveFood(){
        this._hunger++
        this._thirst-=3
    }
    giveDrink(){
        this._thirst++
        this._hunger-=2
    }
    doNothing() {
        this._happy --
        this._hunger --
        this._thirst --
    }
 }
 const dog = new Pets ("dog1")
 const cat = new Pets ("cat1")
 const rabbit = new Pets ("rabbit1")
 
 class Dogs extends Pets {
    constructor(name, walkies) {
        super(name)
        this._walkies = walkies
    }
    get walkies() {
        return this._walkies
    }
    walk() {
        this._happy++
        this._thirst --
    }
 }
 const newdog = new Dogs ("dog1")
 
 function petSelect() {
 
        userInput = prompt(`What animal would you like to take care of?\n1. Dog \n2. Cat \n3. Rabbit` )
        if (userInput == 1) {
            Dog()
            }
            else if (userInput == 2) {
            Cat()
            }
            else if (userInput == 3){
            Rabbit()
            }
 }
 petSelect()
 
 function Dog() {
    userInput = prompt (`What would you like to do?\n1. Give Food \n2. Give Water \n3. Take for a walk \n4. Do nothing`)
 
 if (userInput == 1) {
    dog.giveFood()
    console.log(dog._hunger)
    checkThirst()
    console.log(dog._thirst)
    Dog()
 }
 else if (userInput == 2) {
    dog.giveDrink()
    console.log(dog._thirst)
    checkHunger()
    console.log(dog._hunger)
    Dog()
    }
 else if (userInput == 3) {
    newdog.walk()
    Dog()
 }
 else if (userInput == 4) {
    dog.doNothing()
    checkHappy()
    checkHunger()
    checkThirst()
    Dog()
 }
 }
 
 function Cat() {
    userInput = prompt ("What would you like to do?\n1. Give Food \n2. Give Milk \n3. Do Nothing ")
 
 if (userInput == 1) {
    cat.giveFood()
    checkThirst()
    Cat()
 }
 else if (userInput == 2) {
    cat.giveDrink()
    checkHunger()
    Cat()
 }
 else if (userInput == 3) {
    cat.doNothing()
    checkHappy()
    checkHunger()
    checkThirst()
    Cat()
 }
 }
 
 function Rabbit() {
    userInput = prompt ("What would you like to do?\n1. Give Food \n2. Give Water \n3. Do Nothing ")
 
 if (userInput == 1) {
    rabbit.giveFood()
    checkThirst()
    Rabbit()
 }
 else if (userInput == 2) {
    rabbit.giveDrink()
    checkHunger()
    Rabbit()
 }
 else if (userInput == 3) {
    rabbit.doNothing()
    checkHappy()
    checkHunger()
    checkThirst()
    Rabbit()
 }
 }
 
 function checkHunger() {
    if (dog._hunger < 3 || cat._hunger < 3 || rabbit._hunger < 3)
    alert ("Your pet is hungry, please feed it")
 }
 function checkThirst() {
    if (dog._thirst < 3 || cat._thirst < 3 || rabbit._hunger <3)
    alert ("Your pet is thirsty, please give it a drink")
 }
 function checkHappy() {
    if (dog._happy < 1 || cat._happy < 1 || rabbit._happy <1)
    alert ("Your pet is very sad, do something to cheer it up soon")
 }