
// Write a program that takes a user’s input and prints the numbers from one to the number the user entered. 

// However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz.

// For numbers which are multiples of both three and five print FizzBuzz.

let increment = 1;
let input = prompt("Enter a number");

while (increment <= input) {

  if (increment % 5 === 0 && increment % 3 === 0) {
    console.log("FizzBuzz");
  } else if (increment % 3 === 0) {
    console.log("Fizz");
  } else if (increment % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(increment);
  }

  if (increment == input) {
    break
  }

  increment += 1;
}

// 




