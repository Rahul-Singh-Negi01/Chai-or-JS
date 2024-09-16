const arr = [1, 2, 3, 4, 5];
// console.log(arr[1]);

// ******** METHODS ********

// 1

// arr.push(7, 8, 6);
// arr.pop();
// arr.pop();
// arr.pop();



// console.log("A ", arr);

const newarr1 = arr.slice(0,3)
// console.log(newarr1);

// console.log("B", arr);

const newarr2 = arr.splice(0,3)
// console.log("C",arr);

// console.log( newarr2);

const cars = [1,2,3,4,5]
let car = cars[4]
// console.log(car);

const fruits = [4,8,3,5,1,2,0];
// console.log(fruits.sort());
// console.log(cars.length);


/* ******LOOPS******* */
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
console.log(cats);

const cats1 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats1[i]);
}