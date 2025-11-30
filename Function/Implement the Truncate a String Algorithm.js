function truncateString(str, num) {
    // Check if string length is more than the number
    if (str.length > num) {
        // Truncate string to num characters and append "..."
        return str.slice(0, num) + '...';
    } 
    // If string length is equal or less, return it unchanged
    else {
        return str;
    }
}

// Example test calls
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // "A-tisket..."
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); // "Peter Piper..."
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); // Full string
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); // Full string
console.log(truncateString("A-", 1)); // "A..."
console.log(truncateString("Absolutely Longer", 2)); // "Ab..."
