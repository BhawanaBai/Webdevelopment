//1. FizzBuzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


//2. Sum of Array Elements

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

let numbers = [1, 2, 3, 4, 5];
sumArray(numbers); // Output: 15


//3. Square of a Number

function square(num) {
  return num ** 2;
}

console.log(square(2)); // Output: 25


//4. Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
  console.log((celsius * 9 / 5) + 32);
}

celsiusToFahrenheit(30); // Output: 86


//5. Length of an Array

function arrayLength(arr) {
  console.log(arr.length);
}

let fruits = ["apple", "banana", "cherry"];
arrayLength(fruits); // Output: 3


//6. Largest of Two Numbers

function largestNum(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}

console.log(largestNum(10, 20)); // Output: 20


//7. Check if a Number is Positive

function isPositive(num) {
  if (num > 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPositive(5); // Output: true
isPositive(-5); // Output: false


//8. Sum of "n" Numbers

function sumOfN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}

sumOfN(5); // Output: 15


//9. Get Even Numbers from an Array

function getEvenNumbers(arr) {
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenNumbers.push(arr[i]);
    }
  }
  console.log(evenNumbers);
}

let numbers1 = [1, 2, 3, 4, 5, 6];
getEvenNumbers(numbers); // Output: [2, 4, 6]

//10. Count Even Numbers in an Array

function countEvenNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      count++;
    }
  }
  console.log(count);
}

let numb = [1, 2, 3, 4, 5, 6];
countEvenNumbers(numbers); // Output: 3


//11. Squares of Numbers in an Array

function squaresOfNumbers(arr) {
  let squares = [];
  for (let i = 0; i < arr.length; i++) {
    squares.push(arr[i] * arr[i]);
  }
  console.log(squares);
}

let num = [1, 2, 3, 4, 5];
squaresOfNumbers(numbers); // Output: [1, 4, 9, 16, 25]


//12. Multiplication Table of a Number

function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + num * i);
  }
}