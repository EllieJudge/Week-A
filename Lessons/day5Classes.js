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
//     console.log(rosie.name)

//     rosie.increaseHops()
//     console.log(rosie.hops)

//Leonas Car Example
class Car{
    constructor(reg){
        this._reg = reg;
        this._hours = 0;
        this._price = 0.00;
    }
    get reg(){
        return this._reg;
    }
    get hours(){
        return this._hours;
    }
    get price(){
        return this._price;
    }
    increaseHours(){
        this._hours++;
        this._price += 1.50;
    }
}
const pay = (reg, hours) => {
    const car = new Car(reg);
    for (i = 0; i < hours; i++){
        car.increaseHours();
    }
    console.log(`You need to pay £${car.price} for ${car.hours} hours`)
}
pay("m7 car", 5)


// const ferrari = new Car ("ferrari")
// console.log(ferrari.reg)
// console.log(ferrari.totalPrice())
