/**
 * Confirms if a string ends with the target string
 * @param {string} str - The string to check
 * @param {string} target - The ending to match
 * @returns {boolean} true if string ends with target, false otherwise
 */
const confirmEnding = (str, target) => {
    // Check if string ends with target using ternary operator
    return str.slice(-target.length) === target 
        ? true  // String matches target ending
        : false; // String does not match target ending
}

// Test examples - All tests should now pass
console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Congratulation", "on")); // true
console.log(confirmEnding("Connor", "n")); // false
console.log(confirmEnding("He has to give me a new name", "name")); // true
console.log(confirmEnding("Open sesame", "same")); // true
