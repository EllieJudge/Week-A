class Pet {
    constructor(name) {
        this._name = name;
        this._hunger = 10;
        this._thirst = 10;
        this._happiness = 10;
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
        this._hunger-=2;;
        //this._thirst++;
        this._happiness++;
    }
    giveDrink() {
        this._thirst-=2;
       //this._hunger++;
        this._happiness++;
    }
    doNothing() {
        this._hunger+=2;
        this._thirst+=2;
        this._happiness-=3;
    }
    checkHunger() {
        if (this._hunger >= 7) {
            console.log(`Your ${pet} is hungry. Feed them!`)
        }
        else if (this._hunger <= 3) {
            console.log("Your pet is getting fat. Stop feeding it!")
        }
    }
    checkThirst() {
        if (this._thirst >= 7) {
            console.log(`Your ${pet} is thirsty. Water them!`)
        }
        else if (this._thirst <= 3) {
            console.log(`Your pet has drank enough! Chill out`)
        }
    }
    checkHealth() {
        if (this._hunger >= 20 || this._thirst >= 20) {
            console.log(`Your ${pet} is dead. You killed it. Game over, murderer. Go away and think about what you've done.`)
            .exit()
        }
        else if (this._hunger <= -3 || this._thirst <= -3) {
            console.log(`Your over indulged your pet. It died, from a heart attack. You monster.`)
        } 
    }
    checkHappiness() {
        if (this._happiness == 17){
            console.log(`Congratulations, your pet is very happy!`)
        }
        else if (this._happiness == 5) {
            console.log('Your pet is getting sad. Cheer them up')
        }
        else if (this._happiness == 2) {
            console.log('Your pet is getting really, really sad. Do something!')
        }
        else if (this._happiness <= -3) {
            console.log(`${name} has ran away because you didnt love it. People like you shouldn't be allowed pets!!!`)
        }
    }
}


//Rabbit extension
class Rabbit extends Pet {
    constructor(name) {
        super(name);
        this._hops = 0;
    }
    get hops() {
        return this._hops;
    }
    increaseHops() {
        this._hops+=3;
        this._thirst++;
        this._hunger++;
    }
}
//Dog extension
//Cat extension

const rabbit = new Rabbit("rabbit");


//Choices
function choosePet() {
    userInput = prompt(`Hello. Welcome to the petshop! Which type of pet would you like? 
    \n1. Rabbit \n2. Cat \n3. Dog`)

    if (userInput == 1) {
        pet = "rabbit";
    } else if (userInput == 2) {
        pet = "cat";
    } else if (userInput == 3) {
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

//Pet functions
function rabbitFunc() {
    userInput = prompt(`Would you like to \n1. Feed your rabbit \n2. Water your rabbit 
    \n3. Cuddle your rabbit \n4. Nothing`);

    switch (userInput) {
        case "1": //feed
            console.log("You chose to feed your rabbit")
            console.log(`Hunger was: ${rabbit._hunger} thirst was: ${rabbit._thirst}`)
            rabbit.giveFood();
            console.log(`Hunger now: ${rabbit._hunger} thirst now: ${rabbit._thirst}`)
            rabbit.checkHunger();
            rabbit.checkThirst();
            rabbit.checkHealth();
            rabbitFunc();
            break;
        case "2": //water
            console.log("You chose to water your rabbit")
            console.log(`Thirst was: ${rabbit._thirst} hunger was: ${rabbit._hunger}`)
            rabbit.giveDrink();
            console.log(`Thirst now: ${rabbit._thirst} hunger now: ${rabbit._hunger}`)
            rabbit.checkHunger();
            rabbit.checkHealth();
            rabbitFunc();
            break;
        case "3"://cuddle
            rabbit.increaseHops();
            console.log(`Awwww! You cuddled your rabbit!`)
            console.log(`Your rabbit is so hopping happy ${name}'s done a hop!`)
            console.log(`Thirst now: ${rabbit._thirst} hunger now: ${rabbit._hunger} Hops: ${rabbit._hops} Happiness: ${rabbit._happiness}`)
            rabbit.checkHappiness();
            rabbit.checkHunger();
            rabbit.checkHealth();
            rabbitFunc();
            break;
        case "4": //nothing
        console.log(`You chose to do nothing. Thirst was: ${rabbit._thirst} Hunger was: ${rabbit._hunger} Hops: ${rabbit._hops} Happiness: ${rabbit._happiness}`)
        rabbit.doNothing();
        rabbit.increaseHops();
        console.log(`Thirst now: ${rabbit._thirst} Hunger now: ${rabbit._hunger} Hops: ${rabbit._hops} Happiness: ${rabbit._happiness}`)
        rabbit.checkHappiness();
        rabbit.checkHunger();
        rabbit.checkHealth();
        rabbitFunc();
    }
}

//Order functions called
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