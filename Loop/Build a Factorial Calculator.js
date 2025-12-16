// Declare a number between 1 and 20
let num = 5;

// Create factorialCalculator function
function factorialCalculator(number) {
  let result = 1; // Start result at 1

  // Loop to calculate factorial
  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result; // Return final result
}

// Call function and store factorial result
const factorial = factorialCalculator(num);

// Create final message
const resultMsg = `Factorial of ${num} is ${factorial}`;

// Output message to console
console.log(resultMsg);
