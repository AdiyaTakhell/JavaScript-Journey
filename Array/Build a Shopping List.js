// Print the title of the grocery shopping program
console.log("Grocery shopping list");

// Initialize an empty array to store shopping items
const shoppingList = [];

// Comment about wanting fruit
console.log("It will be nice to have some fruit to eat.");

// Add "Apples" to the end of the shopping list using push()
shoppingList.push("Apples");

// Function to display current shopping list as a formatted string
function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

// Display the shopping list after adding apples
console.log(getShoppingListMsg(shoppingList));

// Add "Grapes" to the end of the shopping list
shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

// Comment about needing cooking oil
console.log("It looks like we need to get some cooking oil.");

// Add "Vegetable Oil" to the beginning of the shopping list using unshift()
shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

// Add multiple snack items to the end using push() with multiple arguments
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

// Comment about too much junk food
console.log("This looks like too much junk food.");

// Remove the last item ("Potato Chips") using pop()
shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

// Comment about wanting dessert
console.log("It might be nice to get a dessert.");

// Add "Chocolate Cake" to the beginning of the list
shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

// Comment about being more health conscious
console.log("On second thought, maybe we should be more health conscious.");

// Remove first item ("Chocolate Cake") using shift()
shoppingList.shift();
// Replace first item ("Veget
