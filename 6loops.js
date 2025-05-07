//console.log("My name is Quratulain Nizami");
//console.log("My name is Quratulain Nizami");
//console.log("My name is Quratulain Nizami");
//console.log("My name is Quratulain Nizami");
//console.log("My name is Quratulain Nizami");

//for (initialization; condition; increment/decrement);
 //for block

 for (let i = 0; i<10; i++){
    console.log(i);
    
 }
 for (let i = 0; i<5; i++){
    console.log('My name is Quratulain Nizami');
    
 }
 for (let i = 0; i<21; i+=2){
    console.log(i);
    
 }
 for (let i = 1; i<20; i+=2){
    console.log(i);
    
 }
 for (let i = 10; i>=0; i--){
    console.log(i);
    
 }  //blocl scope variable
 for (let i = 1; i<=10; i++){
    console.log(`4 x ${i} = ${4*i}`);
    
 }

// while (condition){
//   while block
// }

let i = 0   //globle scope variable
while (i<10){
   console.log(i);
   i++
   
}
let j = 1
do {
  console.log("Hello world");
   j++
} while (j<=10);

// write a program that prints factorical of a number
// 5! = 1x2x3x4x5
// fact = 1x1=1
// fact = 1x2=2
// fact = 2x3=6
// fact = 6x4=24
// fact = 24x5=120
// fact = 120

let number = 5
let fact = 1
 for(let i = 1; i<=number; i++){
   fact *= i  //fact = fact *1
   
 }
 console.log(`Factorial of ${number} is ${fact}`);
   //OBJECT ME LOOPS LGANA
 let car = {
   modal : "2010",
   brand : "Toyota",
   owner : {
      name : "Jhon Doe",
      age : 60,
      license_number : 4772424
   }
 }
 for (const key in car) {
     const element = car[key];
     console.log(`The ${key} is ${element}`);
      
   }
   console.log(car['brand']);

   for (const key in car.owner) {
         const element = car.owner[key];
         console.log(`The ${key} is ${element}`);
         
      
   }
   
 
