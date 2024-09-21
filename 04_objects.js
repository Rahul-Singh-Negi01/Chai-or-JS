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
console.log(newobject.fullname.username.lname);

