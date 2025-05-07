// comdition statments
if (5>3){
    console.log('Hello world');
    
}
else{
    console.log("Hiii");
    
}

let number = 9
console.log(number%2);

if(number%2==0){
    console.log('Even number');
    
}
else{
    console.log('odd number');
    
}
//write a program that give a mesage of "weather is pleasant" only when the temperature is less than or equal to 25 and it is raining, print "Weather is hot" when tempreature is grater than 25 and less than and equals to 40 else print 'weather is hot'

let temp = 45  //globle scope
let isRaining = true 
let message = '' //empty string
if (temp <= 25){
    message = 'weather is pleasant'
}
else if(temp >25 && temp<=40){
    massage = 'weatheris hot'
}
else{
    message = 'weather is hot'
}
console.log(message);


let marks = 60
let grade = ''
if(marks <=100){
    message = ''
}
else if( marks <=100 && marks >=90){
    grade= 'Grade A*'
}
else if( marks <=90 && marks >=79){
    grade = 'Grade A'
}
else if( marks <=79 && marks >=69){
   grade = 'Grade B'
}
else if( marks <=69 && marks >=59){
    grade= 'Grade C'
}
else if(marks>50);
grade= "Try_Again"

console.log(grade);

