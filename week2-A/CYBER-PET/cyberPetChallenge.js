class Animal {
    constructor(name) {
        this._name = name;
        this._hunger = 5;
        this._thirst = 5;
        this._happiness = 5;
    }
    get name() {
        return this._name;
    }
    get hunger() {
        return this._hunger;
    }
    get thirst() {
        return this._thirst;
    }
    get happiness() {
        return this._happiness;
    }
    giveFood() {
        this._hunger--;
        this._thirst++;
        this._happiness++;
    }
    giveDrink() {
        this._thirst--;
        this._hunger++;
        this._happiness++;
    }
    doNothing() {
        this._hunger++;
        this._thirst++;
        this._happiness--;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name);
        this._hops = 0;
    }
    get hops() {
        return this._hops;
    }
    increaseHops() {
        this._hops++;
        this._thirst++;
        this._hunger++;
    }
}


function choosePet() {
    userInput = prompt(`Hello. Welcome to the petshop! Which type of pet would you like? 
    \n1. Rabbit \n2. Cat \n3. Dog`)

    if (userInput == 1 || userInput == "rabbit" || userInput == "Rabbit") {
        pet = "rabbit";
    } else if (userInput == 2 || userInput == "cat" || userInput == "Cat") {
        pet = "cat";
    } else if (userInput == 3 || userInput == "dog" || userInput == "Dog") {
        pet = "dog";
    } else {
        alert("We don't have any of those...")
    }
    alert(`You chose a ${pet}!`)
    return pet
}


function chooseName() {
    userInput = prompt(`What would you like to call your ${pet}?`)
    name = userInput;
    alert(`Your ${pet} is called ${name}!`)
    return name
}


function rabbitFunc() {
    const rabbit = new Rabbit("rabbit");

    userInput = prompt(`Would you like to \n1. Feed your rabbit \n2. Water your rabbit 
    \n3. Cuddle your rabbit \n4. Nothing`)
    switch (userInput) {
        case "1": //feed
            console.log(`Rabbit hunger was ${rabbit._hunger}`)
            rabbit.giveFood();
            alert(`Yay! You fed your rabbit`)
            console.log(`Rabbit hunger is now ${rabbit._hunger}`)
            rabbit.increaseHops();
            checkHunger();
            rabbitFunc();
            break;
        case "2": //water
            console.log(`Rabbit thirst is ${rabbit._thirst}`)
            rabbit.giveDrink();
            alert(`Yay! You watered your rabbit`)
            console.log(`Rabbit thirst is now ${rabbit._thirst}`)
            rabbitFunc();
            break;
        case "3"://cuddle
            alert(`Yay! You cuddled your rabbit`)
            console.log(`Hops before cuddle: ${rabbit._hops}`)
            rabbit.increaseHops();
            rabbit.increaseHops();
            console.log(`Your rabbit is so hopping happy! Hops: ${rabbit._hops}`)
            rabbitFunc();
            break;
        case "4": //nothing
        rabbit._thirst++;
        rabbit._hunger++;
        rabbit.increaseHops();
        console.log(`Rabbit thirst is now ${rabbit._thirst}`) 
        console.log(`Rabbit hunger is now ${rabbit._hunger}`)
        console.log(`Rabbit hunger is now ${rabbit._hops}`)
        rabbitFunc();
    }
}




function checkHunger() {
    if (this._hunger < 3) {
        alert(`Your ${pet} is hungry. Feed them!`)
    }
}

function checkThirst() {
    if (this._thirst < 3) {
        alert(`Your ${pet} is thirsty. Feed them!`)
    }
}

function checkHappiness() {
    if (this._happiness < 3) {
        alert(`Your ${pet} is sad. Show them some love!`)
    }
}







function catFunc() {
    console.log("Meow")
}

function dogFunc() {
    console.log("Woof")
}

function runPetShop() {
    let pet = choosePet()
    let name = chooseName()
    console.log(pet, name)
    if (pet == "rabbit"){
        rabbitFunc();
    }
    else if (pet == "cat") {
        catFunc();
    }
    else if (pet == "dog") {
        dogFunc();
    }
}
runPetShop()