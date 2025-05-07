// function printText(){
//     //function block
//     console.log("Hello world");
//     console.log("Hiiii");
// }
// printText()
login() //Hoisting

//block scope element
// function printName(names){ //parameter
//   console.log(`My name is ${names}`);
  
// }
// printName("john") //argument

function addNumbers(num1,num2){
    //console.log(num1+num2);
    let sum = num1+num2
    return sum
    return num1+num2
    
    
}
console.log (addNumbers(5,8))
let a = addNumbers(4,6)
console.log(a);

function login(username){
    if(username == undefined){
        console.log(`please enter your username`);
        return
    }
   console.log(`Hello ${username} Welcome to the dishbord`)
}
console.log(login())
