/*Using parameters */

const multiplies =(a,b)=>{
    return a*b;
}

console.log(multiplies(2,3));

/*Using global variables*/

let c=2;
let d=3;
let e;

const mutliply =()=>{
    e = c*d;
    console.log(e);
}

mutliply();