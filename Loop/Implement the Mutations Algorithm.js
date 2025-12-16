function mutation(arr) {
  // Convert both strings to lower case
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();

  // Check each character in the second string
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      return false;
    }
  }
  return true;
}
