function myname() {
console.log('R');
console.log('A');
console.log('H');
console.log('U');
console.log('L');
}
// myname();

function sum(a,b){
    return a+b;
}

// console.log(sum(2,4));
 
function add(){
    return 1+2;
}

// console.log(add());

function add1(number1,number2){
   
    // console.log(number1+number2);

    
}
const newadd1 = add1(2,4);
// add1(2,5)
// add1(2,'a')
// add1(2,null)
// console.log(newadd1);


function add2(number1,number2){
   
    // console.log(number1+number2);
    // return number1+number2;    
}
const newadd2 = add2(2,4);
// console.log(typeof newadd2);
// console.log(newadd2);

function calculatePrice(val1, ...num1){
    return num1
}

// console.log(calculatePrice(100,200,300,400,500));
const user = {
    username:"rahul",
    price:199
}

function handleobj(anyobject){
    // console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleobj(user);
handleobj({
    username:"negi",
    price:1000000
});
