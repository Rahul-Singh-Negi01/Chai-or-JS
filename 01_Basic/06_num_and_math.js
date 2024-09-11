const num = 123;
// console.log(num);

const num1 = new Number(100.0010)
// console.log(num1);
// console.log(typeof num1);

// console.log(num1.valueOf());
// console.log(num1.toString().length);
// console.log(num1.toFixed(2));
const num2 = 10000000000;
// console.log(num2.toPrecision(7));
// console.log(num1);
// console.log(num2.toLocaleString('en-IN'));

// ************ MATHs *************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.min(1,2,3,4,5,0));
// console.log(Math.max(1,100,3,4,5,0));
// console.log((Math.random()*10)+1)

let min = 1;
let max = 4;

let value = Math.floor(Math.random() * (max-min+1));
console.log(value);

