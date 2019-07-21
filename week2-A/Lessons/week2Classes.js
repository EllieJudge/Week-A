// //An Object (called Rosie)
// let rosie = {
//     _name: "Rosie",
//     _hops: 0,
    
//     get name() {
//     return this._name;
//     },
    
//     get hops() {
//     return this._hops;
//     },
    
//     increaseHops() {
//     this._hops++; //we dont need to return this, we can just return the hops, as hops is what its changing
//     }
//     }
//     console.log(rosie.name)
//     console.log(rosie.hops)
//    rosie.increaseHops()
//    rosie.increaseHops()
//    console.log(rosie.hops)

//Class called Bunny creates bunny objects
// class Bunny{
//     constructor(name){
//     this._name = name;
//     this._hops = 0;
//     }
//     get name(){
//     return this._name;
//     }
//     get hops(){
//     return this._hops;
//     }
//     increaseHops(){
//     this._hops++;
//     }
//     }
//     const rosie = new Bunny("Rosie");
//     rosie.increaseHops();
//     console.log(rosie);

//     const lizzie = new Bunny("Lizzie");
//     console.log(lizzie)

//Class called Animal, with extended animals... 
//These extended animals inherit animal methods, but also have their own individual ones

class Animal{
    constructor(name){
        this._name = name;
        this._hunger = 10;
        this._thirst = 10;
    }
    get name(){
        return this._name;
    }
    get hunger(){
        return this._hunger;
    }
    eat(){
        this._hunger--;
    }
    get thirst(){
        return this._thirst;
    }
    drink(){
        this._thirst--;
    }
}

class Bunny extends Animal{
    constructor(name, lovesCarrot){
        super(name);
        this._lovesCarrot = lovesCarrot;
    }
    get lovesCarrot(){
        return this._lovesCarrot;
    }
}
const rosie = new Bunny ("Rosie", true)
console.log(rosie)
const ellie = new Bunny ("Ellie", false)
console.log(ellie)

class Dog extends Animal{
    constructor(name, favFoods){
        super(name);
        this._favFoods = favFoods;
    }
    get favFoods() {
        return this._favFoods;
    }
}

const alex = new Dog ("Alex", ["biscuits", "NOT chocolate", "beer" ])
console.log(alex)
console.log(alex._thirst) // 10
console.log(alex.drink()) //-1 (undefined)
console.log(alex.drink())//-1 (undefined)
console.log(alex.drink())//-1 (undefined)
console.log(alex._thirst) // 7

class Cat extends Animal{
    constructor(name, purrs){
        super(name);
        this._purrs = purrs;
    }
    get purrs() {
        return this._purrs;
    }
    increasePurrs(){
        this._purrs++;
    }
}

const fluffy = new Cat ("Fluffy", 10)
console.log(fluffy) //10
console.log(fluffy.increasePurrs())
console.log(fluffy.increasePurrs())
console.log(fluffy.increasePurrs())
console.log(fluffy) //13