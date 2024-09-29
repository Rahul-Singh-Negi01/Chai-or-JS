const sum = (a,b)=>{
    
    console.log(a+b);
}

// sum(2,3)

const user = {
    username: "rahul",
    price:999,

    WelcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);  
        console.log(this);
        
    }
}

// user.WelcomeMessage()
// user.username  = "piyush"
// user.WelcomeMessage()
// console.log(this);
// function chai(){
//     let username = "rahul"
//     console.log(this.username);
// }
// chai()