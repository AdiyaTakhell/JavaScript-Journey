// Masks email address for privacy (shows first/last chars before @, hides middle)
function maskEmail(email) {
    // Find position of @ symbol in email
    const atIndex = email.indexOf('@');
    
    // Get first character of username (e.g. 'a' from "apple.pie")
    const firstChar = email.slice(0, 1);
    
    // Get character before @ (e.g. 'e' from "apple.pie" before "@example.com")
    const lastChar = email.slice(atIndex - 1, atIndex);
    
    // Calculate number of characters to mask (middle section length)
    const middleLen = atIndex - 2;
    
    // Create string of asterisks for masked section
    const stars = '*'.repeat(middleLen);
    
    // Combine: first char + stars + last char + domain (everything from @ onward)
    return firstChar + stars + lastChar + email.slice(atIndex);
}

const email = "apple.pie@example.com";
console.log(maskEmail(email));  // Outputs: "a*******e@example.com"
