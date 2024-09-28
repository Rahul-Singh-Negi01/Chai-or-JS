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

function makeuser(user_name,user_age){
    return{
        name:user_name,
        age:user_age
    };
}

let user1 = makeuser("rahul",20)
// console.log(user1);

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} and ${this.name[1]} are ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };

  person.bio()
  person.introduceSelf()
