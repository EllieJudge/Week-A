// 2) Take the word 'codenation' and rearrange the letters in the 
//word so they are in alphabetical order.
// Store the result in a new variable and log it to the console.

function alphabetical(str) {

    let splitString = str.split('') //splits it up into an array
   
    splitString.sort() //sorts the array, alphabetically

    let joined = splitString.join('') //joins the new array back together again
    
    return joined;
    
}
console.log(alphabetical('code nation'))