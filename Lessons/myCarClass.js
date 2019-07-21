//My attempt at a bigger car
class Car{
    constructor(reg, colour, hours){
        this._reg = reg;
        this._colour = colour;
        this._hours = hours;
        this._price = 1.50;
        this.ticket = this._hours * this._price
       }
       get reg() {
           return this._reg;
       }
       get colour() {
           return this._colour;
       }
       get hours() {
           return this._hours;
       }
       inreaseHours() {
           return this._hours++;
       }
       get price(){
           return this._price;
       }
       ticketPrice() {
            console.log(`Your ticket for ${this.hours} hours is £${this.ticket}`)
            return this.ticket; 
       }
}

// const porsche = new Car (478357, "red", 6)
// console.log(porsche.reg)
// console.log(porsche.ticketPrice())

class Staff extends Car {
    constructor (reg, colour, hours, staffNumber, amount){
        super(reg, colour, hours);
        this._staffNumber = staffNumber;
        this._credits = 9;
        this._amount = amount;
    }
    get staffNumber(){
        return this._staffNumber;
    }
    get credits(){
        return this._credits;
    }
    paidInCredits(){
      return this._credits -= this.ticket;
    }
    addedToCredit(amount){
        let newCreditBalance = this._credits + amount;
        return `Your new (credit) balance is £${newCreditBalance}`;
    }
}

const staffy = new Staff(666, "green", 2, "St666", 10)
console.log(staffy)
//console.log(staffy.addedToCredit(2))
//console.log(staffy.addedToCredit(22))
console.log(staffy.paidInCredits())

