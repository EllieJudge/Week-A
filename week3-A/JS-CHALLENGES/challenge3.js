// (3) Given an array of two numbers you need to write a function 
//which will add together those two numbers AND all the numbers in between them.
// For example - if you put [5, 10] into your function, it would calculate 
//5 + 6 + 7 + 8 + 9 + 10 then log the result to the console. 
//test your code with [1, 4] which should equal 10 [1, 5] which should equal 15

function madAdd(num1, num2) {
   
    let result = 0;
    for(i = num1; i <= num2; i++) {
       result += i; 
    }
     
    return result
}
console.log(madAdd(1, 4)); //should equal 10