// Declare the year variable outside the function
let year = 2000; 

// Define the isLeapYear function using ternary operator
function isLeapYear(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) 
        ? `${year} is a leap year.`
        : `${year} is not a leap year.`;
}

// Call the function and store result
let result = isLeapYear(year);

// Output to console
console.log(result);
