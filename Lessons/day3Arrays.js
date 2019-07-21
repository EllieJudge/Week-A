//Arrays 
//Access arrays with bracket notation! [2]

let coffeeOrder = [
    "Sam - Hot Chocolate",
    "Dan - Sparkling Water",
    "Tom - Peppermint Tea",
    "Ellie - Soya late"
];
coffeeOrder[1] = "Dean - Strawberry and Cream Frappuccino";//this replaces Dan!
console.log(coffeeOrder.length);


let favouriteFoods = [
    "Burritos - spicy",
    "Chinese - vege mix platter",
    "Mexican - burritos lol"
];
favouriteFoods.push("Vego");//To add something to an array (not replace) use .push
console.log(favouriteFoods);

//Delete something from an array
let vegetables = [
    "Peppers",
    "Onions",
    "Broccolli"
]
console.log(vegetables.pop());//returns last item popped off, so broc
console.log(vegetables);//returns array with one less item


//Activity 1.
let favWebsites = [
    "Depop",
    "Asos",
    "Instagram"
]
console.log(favWebsites)
favWebsites.push("Facebook", "Something else");
console.log(favWebsites)
console.log(favWebsites.pop())
console.log(favWebsites)

//Activity 2.
//.shift()
//.unshift()
//.pop()
//.push()
//.splice()
//.slice()

let myWardrobe = [
    "Dress1",
    "Dress2",
    "Dress3",
    "Trousers",
    "T-shirt",
    "Shoes"
]
console.log(myWardrobe)

console.log(myWardrobe.shift())//removes first item
console.log(myWardrobe)
//console.log(myWardrobe.unshift())//prints 5, why?
console.log(myWardrobe.unshift("Jumpsuit"))//adds "jumpsuit" to beginning of array
console.log(myWardrobe)
