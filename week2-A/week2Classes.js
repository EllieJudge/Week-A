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

class Bunny{
    constructor(name){
    this._name = name;
    this._hops = 0;
    }
    get name(){
    return this._name;
    }
    get hops(){
    return this._hops;
    }
    increaseHops(){
    this._hops++;
    }
    }
    const rosie = new Bunny("Rosie");
    rosie.increaseHops();
    console.log(rosie);

    const lizzie = new Bunny("Lizzie");
    console.log(lizzie)