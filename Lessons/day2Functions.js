let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
    console.log("Stopping the grind");
    coffeeIsGrinding = false;
} 
else {
    console.log("Grinding is about to begin");
    coffeeIsGrinding = true;
}
}
pressGrindBeans();


function coffeeOrder (type, size) {
    console.log(`Your ${size} ${type} is ready for you now.`)
}
coffeeOrder('Americano', 'medium');



const coffeeOrder2 = (milk, syrup) => {
    console.log(`Your coffee with ${milk} and ${syrup} is ready`)
}
coffeeOrder2("soya", "vanilla")