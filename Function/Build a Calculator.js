// Adds two numbers together and returns the sum
function calculateSum(num1, num2) {
    return num1 + num2;
}

// Test the sum function with different values
console.log(calculateSum(2, 5));   // Outputs: 7
console.log(calculateSum(10, 10)); // Outputs: 20
console.log(calculateSum(5, 5));   // Outputs: 10

// Subtracts num2 from num1 and returns the difference
function calculateDifference(num1, num2) {
    return num1 - num2;
}

// Test the difference function
console.log(calculateDifference(22, 5));  // Outputs: 17
console.log(calculateDifference(12, 1));  // Outputs: 11
console.log(calculateDifference(17, 9));  // Outputs: 8

// Multiplies two numbers and returns the product
function calculateProduct(num1, num2) {
    return num1 * num2;
}

// Test the product function
console.log(calculateProduct(13, 5)); // Outputs: 65

// Divides num1 by num2, returns error message if dividing by zero
function calculateQuotient(num1, num2) {
    return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

// Test the quotient function (handles division by zero)
console.log(calculateQuotient(7, 11));  // Outputs: 0.6363636363636364
console.log(calculateQuotient(3, 0));   // Outputs: "Error: Division by zero"

// Calculates the square of a number using exponentiation
function calculateSquare(num) {
    return num ** 2;
}

// Test the square function
console.log(calculateSquare(2));  // Outputs: 4
console.log(calculateSquare(9));  // Outputs: 81

// Calculates the square root of a number using Math.sqrt()
function calculateSquareRoot(num) {
    return Math.sqrt(num);
}
