// singleton
//object.create

// object literals
const sym = Symbol("rahul")
const user = {
    name: "rahul", 
    [sym]: "mykey",
    cast: "negi",
    age: 20,
    village: "bitholi",
    email: "rsn@gmail.com"
}
// console.log(user.cast);

// console.log(user["age"]);
// console.log(user.sym);
// console.log(user[sym]);
// console.log(typeof user);
user.email = "1234"
// console.log(user["email"]);
// Object.freeze(user)
user.email = "rsn@gmail.com";
// console.log(user.email);
// console.log(user);

user.greeting = function(){
    // console.log(`hiiii, ${this.age}`);
    
}
// console.log(user.greeting());

// user.greeting("rahul")
// let user = new Object();
// user.rahul = true
// console.log(user);

let userdetail = {
    name:"rahul"
    ,age:20,
    caste:"negi"
}
// userdetail.mid_name = true
// userdetail["like birds"] =true

// let key = prompt("What do you want to know about the user?", "name");

// alter(userdetail[key])

// delete userdetail.caste
// console.log(userdetail);

