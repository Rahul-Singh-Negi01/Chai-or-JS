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

//============= ARROW in function =============

// function chai(){
//     let username = "rahul"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "rahul"
//     console.log(this.username);
// }

// chai()

// const chai = ()=>{
    
//     console.log(this);
// }

// chai()

// ====== ARROW FUNTION =======

// const addition = (num1,num2,num3) => {
    
//     console.log(num1+num2+num3);
// }
// addition(2,3,4)


const addition = (num1,num2,num3) =>  console.log(num1+num2+num3);

addition(2,3,4)
