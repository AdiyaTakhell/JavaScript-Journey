// Converts Celsius temperature to Fahrenheit using the standard formula
const convertCtoF = (celsius) => {
    // Formula: F = (C × 9/5) + 32 [web:11][web:12]
    const fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
};

// Example usage:
// console.log(convertCtoF(0));   // Outputs: 32 (freezing point)
// console.log(convertCtoF(100)); // Outputs: 212 (boiling point)
