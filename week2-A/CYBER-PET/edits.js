
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

// const cat = new Animal("cat1")
// const dog = new Animal("dog1")


if (userInput == 1) {
    alert(`Your rabbits hunger was: ${rabbit._hunger}.`);
    rabbit.eat()
     alert(`Now you have fed your rabbit it's hunger is: ${rabbit._hunger}!`)
}
else if (userInput == 2) {
    alert(`Your rabbits thirst was: ${rabbit._thirst}.`);
    rabbit.drink()
    alert(`Now you have watered your rabbit it's thirst level is: ${rabbit._thirst}!`)
} 
else {
alert("Why don't you love your rabbit?")
}
}