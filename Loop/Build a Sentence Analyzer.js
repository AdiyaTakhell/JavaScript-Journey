// Function to count vowels in a sentence
function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  // Loop through each character and count vowels
  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Test vowel count
const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);


// Function to count consonants in a sentence
function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  // Loop through each character and count consonants
  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

// Test consonant count
const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);


// Function to count punctuation characters
function getPunctuationCount(sentence) {
  let count = 0;

  // Loop through each character and count punctuation (not letters or spaces)
  for (const char of sentence) {
    if (char !== " " && !(/[a-z]/i.test(char))) {
      count++;
    }
  }
  return count;
}

// Test punctuation count
const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);


// Function to count words in a sentence
function getWordCount(sentence) {
  const trimmed = sentence.trim(); // remove extra space
  if (trimmed === "") {
    return 0; // empty or space-only string
  }

  // Split by one or more spaces and count pieces
  const words = trimmed.split(/\s+/);
  return words.length;
}

// Test word count
const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
