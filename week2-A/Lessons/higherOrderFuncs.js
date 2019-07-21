let add = () => {
    return 2 + 3
}
console.log(add())

let whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`)
}

let greet = (time, fn) => {
    if (time < 12) {
        fn("Morning")
    }
    else if (time > 12 && time < 18) {
        fn("Afternoon")
    }
    else {
        fn("Evening")
    }
}
greet(14, whichGreeting);


let whichEvent = (day) => {
    console.log(`Time to... ${day}`)
}

let event = (day, fn) => {
    if (day == "Monday") {
        fn("Start the week.")
    }
    else if (day == "Saturday" || day == "Sunday") {
        fn("Party, it's the weekend.")
    }
    else {
        fn("Go home, you're drunk.")
    }
}
event("Sunda==y", whichEvent);