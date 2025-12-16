function repeatStringNumTimes(str, num) {
  // This will store the final repeated string
  let result = "";

  // If number is 0 or negative, return empty string
  if (num <= 0) {
    return "";
  }

  // Loop 'num' times
  for (let i = 0; i < num; i++) {
    // Add the string to result each time
    result += str;
  }

  // Return the final repeated string
  return result;
}
