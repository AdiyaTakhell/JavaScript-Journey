function findLongestWordLength(sentence) {
  // Split the sentence into individual words
  const words = sentence.split(" ");

  // Track the longest word length
  let longest = 0;

  // Loop through each word in the array
  for (let word of words) {
    if (word.length > longest) {
      longest = word.length;
    }
  }

  // Return the longest word length
  return longest;
}
