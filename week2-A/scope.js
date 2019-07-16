// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a)
// const myFunction = () => {
//   let d = (4)
//   console.log(b)
//   console.log(c)
// }
// myFunction()
// console.log(d)


// let i = 10;
// console.log(i)

// for(i=0; i<3; i++)
//   {
//     console.log(i)
//   }
// console.log(i)


// let one = 1
// console.log(one) //1
// let two = 2
// console.log(two) //2

// function myScope() {
//   let x = 10;
//   sum = one + two
//   console.log(sum) //3
//   sum2 = one + two + x;
//   console.log(sum2) //13
// }
// myScope()


let a = 1;
let b = 2;
let c = 3;

const myFunction2 = () => {
  console.log(b) //2

  const myFunction3 = () => {
    let d = 4;
    console.log(c) //3
    console.log(d) //4
  }
  myFunction3()
  console.log(c) //3
  //console.log(d) //ERROR! D IS NOT DEFINED... CANNOT FIND!
}
myFunction2()