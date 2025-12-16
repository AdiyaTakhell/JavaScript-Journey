function fearNotLetter(str) {
  // Loop through the string characters
  for (let i = 0; i < str.length - 1; i++) {
    // Get current and next character codes
    let currentCode = str.charCodeAt(i);
    let nextCode = str.charCodeAt(i + 1);

    // If the difference is more than 1, a letter is missing
    if (nextCode - currentCode > 1) {
      // Return the missing letter
      return String.fromCharCode(currentCode + 1);
    }
  }

  // If no letter is missing, return undefined
  return undefined;
}
