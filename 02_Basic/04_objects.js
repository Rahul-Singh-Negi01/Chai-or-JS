const object = new Object()
// console.log(object);


object.id = "rnegi12345"
object.name = "Rahul Negi"

// console.log(object);

const newobject = {
    name:"rahul",
    email:"@gmail.com",
    fullname:{
        username:{
            fname:"rahul",
            lname:"negi"
        }
    }
}
// console.log(newobject.fullname.username.lname);

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"a",
    4:"b"
}

const obj3 = {
    5:"a",
    6:"b"
}

const newobj = {...obj1,...obj2,...obj3}
// const newobj1 = Object.assign({},obj1,obj2,obj3)
// console.log(newobj);
// console.log(newobj1);


console.log(Object.keys(newobject));
console.log(Object.values(newobject));
// console.log(Object.entries(newobject));
console.log(Object.entries(newobject.fullname.username));

// hasownproperty