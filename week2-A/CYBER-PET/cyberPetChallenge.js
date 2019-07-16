class Animal {
    constructor(name) {
        this._name = name;
        this._hunger = 5;
        this._thirst = 5;
        this._happiness = 5;
        this._health = 5;
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
    get health() {
        return this._health;
    }
    giveFood() {
        this._hunger--;
    }
    giveDrink() {
        this._thirst--;
    }
    makeHappy() {
        this._happiness++;
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
            rabbit.makeHappy();
            rabbit.increaseHops();
            console.log(`Rabbit happiness is ${rabbit._happiness}`)
            checkHunger();
            rabbitFunc();
            break;
        case "2": //water
            console.log(`Rabbit thirst is ${rabbit._thirst}`)
            rabbit.giveDrink();
            alert(`Yay! You watered your rabbit`)
            console.log(`Rabbit thirst is now ${rabbit._thirst}`)
            rabbit.makeHappy();
            console.log(`Rabbit happiness is ${rabbit._happiness}`)
            break;
        case "3"://cuddle
            alert(`Yay! You cuddled your rabbit`)
            console.log(`Rabbit happiness was ${rabbit._happiness}`)
            rabbit.makeHappy();
            console.log(`Rabbit happiness is now ${rabbit._happiness}`)
            console.log(`Hops before cuddle: ${rabbit._hops}`)
            rabbit.increaseHops();
            rabbit.increaseHops();
            console.log(`Your rabbit is so hopping happy! Hops: ${rabbit._hops}`)
            break;
        case "4": //nothing
        console.log(`Rabbit happiness was ${rabbit._happiness}`)
        console.log(`Rabbit thirst was ${rabbit._thirst}`) 
        console.log(`Rabbit hunger was ${rabbit._hunger}`)
        console.log(`Rabbit hunger was ${rabbit._hops}`)
        rabbit._happiness--;
        rabbit._thirst++;
        rabbit._hunger++;
        rabbit.increaseHops();
        console.log(`Rabbit happiness is now ${rabbit._happiness}`)
        console.log(`Rabbit thirst is now ${rabbit._thirst}`) 
        console.log(`Rabbit hunger is now ${rabbit._hunger}`)
        console.log(`Rabbit hunger is now ${rabbit._hops}`)
    }
}




function checkHunger() {
    if (rabbit._hunger < 3) {
        alert(`Your ${pet} is hungry. Feed them!`)
    }
}

function checkThirst() {
    if (rabbit._thirst < 3) {
        alert(`Your ${pet} is thirsty. Feed them!`)
    }
}

function checkHappiness() {
    if (rabbit._happiness < 3) {
        alert(`Your ${pet} is sad. Show them some love!`)
    }
}

function checkHealth() {

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