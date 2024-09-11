// Primitive

// 7-> Number, string, null, undefined, bigint, boolean, Symbol

// Reference (non-primitive)

// Array, function, object.

const id = Symbol('123')
const newid = Symbol('123')

// console.log(id);
// console.log(newid);
// console.log(id == newid);
// console.log(id === newid);

let obj = {
    Fname: "rahul",
    Lname: "negi"
}
let arr = [1,2,3]
// console.log(arr);

// console.log(typeof arr);


// ++++++++++++++++++++********---------++++++++++++++++++

//Stack (for Primitive), Heap(for Non-Primitive)

let a = 10;
let b = a;
b = 5;
// console.log(a);

// console.log(b);

let myINFO = {
    name: "rahul", age: 20
}

let MyInfo = myINFO;
// MyInfo.name = ""
MyInfo.name = "Rahul Singh Negi";
console.log(myINFO);

console.log(MyInfo);

