function chunkArrayInGroups(arr, size) {
  // Create an empty array to store the chunked subarrays
  let result = [];

  // Loop through the array, increasing by the chunk size each time
  for (let i = 0; i < arr.length; i += size) {

    // Slice the array from the current index to index + size
    // and push the chunk into the result array
    result.push(arr.slice(i, i + size));
  }

  // Return the final array containing all chunks
  return result;
}
