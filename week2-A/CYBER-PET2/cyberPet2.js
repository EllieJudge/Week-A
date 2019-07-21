class Pets {
    constructor(name) {
        this._name = name;
        this._hunger = 5; //10 = starving, 0 = full
        this._thirst = 5; //10 = thirsty, 0 = full
        this._happy = 5; //10 = happy, 0 = very sad
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
    giveFood() {
        this._hunger--;
        this._thirst--;
    }
    giveWater() {
        this._thirst--;
        this._hunger++
    }
}