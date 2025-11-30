// Initialize empty array to store lunch menu items
const lunches = [];

// Add lunch item to the end of the array using push()
function addLunchToEnd(arr, lunchItem) {
  arr.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return arr;
}

// Add lunch item to the start of the array using unshift()
function addLunchToStart(arr, lunchItem) {
  arr.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return arr;
}

// Remove and return last lunch item from array using pop()
function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }
  const removedItem = arr.pop();
  console.log(`${removedItem} removed from the end of the lunch menu.`);
  return arr;
}

// Remove and return first lunch item from array using shift()
function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }
  const removedItem = arr.shift();
  console.log(`${removedItem} removed from the start of the lunch menu.`);
  return arr;
}

// Select and log a random lunch item from the array
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
    return;
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomLunch = arr[randomIndex];
  console.log(`Randomly selected lunch: ${randomLunch}`);
}

// Display all lunch menu items or empty message
function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
    return;
  }
  const menuItems = arr.join(", ");
  console.log(`Menu items: ${menuItems}`);
}
