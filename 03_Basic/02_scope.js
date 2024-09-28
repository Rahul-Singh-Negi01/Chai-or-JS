const a=30
if(true){
    let a =10
    // console.log(a);
}
// console.log(a);

function one(){
    const user_name = "rahul"

    function two(){
        const website  = "youtube"
        console.log(user_name); 
        console.log(website);
          
    }
    // console.log(website);
    two();
}
// one()

if(true){
    const username = "rahul "
    if(true){
        const web = "youtube"
        // console.log(...username,...web);
        // console.log(username + web);
        // console.log(web);   
    }
    // console.log(username);
}

// ================= Hoisting ==============

 
 console.log(one(5));

function one(num){
    return num+1
}

// console.log(two(5));


const two = function(num){
    return num+2
}

console.log(two(5));
