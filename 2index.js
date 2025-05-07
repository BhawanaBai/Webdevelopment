let x = 7
x = x+5

x+=5 //x=x+5 (assigment operator)
x-+2 //x+x-2
x*=6

let quantity = 0
quantity +=1

//ternary Operators
// //let variable = condition ? expression(true) : expression (false)
// let mark = 50
// let markresult = marks >50 ? 'greater': 'equal'

//write a program that tells whether you can drive or not on the basis of your age

let age = 14
let can_drive = age >18 ? 'can drive': 'cannot drive'
console.log(can_drive); 

//write a program that tells that the number is even or not
//number % 2 ==0
let number = 8
let is_even = number % 2==0 ? 'even' : 'odd'
console.log(is_even);
 
a = 7
//logical operators
console.log(5>7);
console.log(5<7);
console.log(5==5);
console.log(5==2);
console.log(5=="5"); //linient comparison
console.log(5==="5"); //strict comparison
console.log(5>=5);

//2+2 = 4  addition
//2+2 = 22 string concatenation
console.log(2+2);
console.log("2"+"2");

let first_name = "jhon"
let last_name ="Doe"
console.log(first_name+last_name);
//Declare variables firstname, lastname and age and display the output as "My name is [firstname] [lastname] and i am[age] year old 
// 
// use a ternary operator to check if marks is greater than or equal to "
//task
let firstname = 'Quratulain'
let lastname = 'Nizami'
let myage = (19)
console.log(firstname+lastname);

let marks = 50
let markResult = marks >=50 ? 'pass': 'fail'
console.log(markResult);

let length = 12
let width = 5
let area= length*width
console.log(`The area of retangle is ${area}`);

let score = "50abc"
score= 50
console.log(`The datatype of score is ${score}`);

let userID = 'qrt' 
let username = 'Quratulain'
let email = 'quratulain.gmail.com'
let isVerified = true
console.table({userID,username,email,isVerified})

let statement = "My name is Quratulain is"
console.log(statement.substr(3,7)); //position start from 0
console.log(statement.substring(3,7));
console.log(statement.indexOf('is'));
console.log(statement.lastIndexOf('is'));
console.log(statement.toLowerCase());
console.log(statement.toUpperCase());


console.log(`The length of statment variable is ${statement.length}`)
statement = statement.replace("Quratulain" , "Qurat");
console.log(statement);







