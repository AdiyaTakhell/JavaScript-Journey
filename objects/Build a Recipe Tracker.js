// Create an empty array to store all recipes
const recipes = [];

// Define recipe1 object
const recipe1 = {
  name: 'Spaghetti Carbonara', // recipe name
  ingredients: ['spaghetti', 'Parmesan cheese', 'pancetta', 'black pepper'], // list of ingredients
  cookingTime: 22, // cooking time in minutes
  totalIngredients: null, // will be calculated later
  difficultyLevel: '', // will be set later
  ratings: [4, 5, 4, 5], // ratings given by users
  averageRating: null, // will be calculated later
};

// Define recipe2 object
const recipe2 = {
  name: 'Chicken Curry',
  ingredients: ['chicken breast', 'coconut milk', 'curry powder', 'onion', 'garlic'],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 5, 5, 5],
  averageRating: null,
};

// Define recipe3 object
const recipe3 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrot', 'bell pepper'],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

// Push all recipes into the recipes array
recipes.push(recipe1, recipe2, recipe3);

// Function to calculate average rating
function getAverageRating(ratings) {
  const total = ratings[0] + ratings[1] + ratings[2] + ratings[3]; // sum ratings
  return total / ratings.length; // divide by number of ratings
}

// Function to count total ingredients
function getTotalIngredients(ingredients) {
  return ingredients.length; // return number of items in ingredients array
}

// Function to determine difficulty level based on cooking time
function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return 'easy';
  } else if (cookingTime <= 60) {
    return 'medium';
  } else {
    return 'hard';
  }
}

// Test functions with recipe1
const recipe1AverageRating = getAverageRating(recipe1.ratings);
console.log(recipe1AverageRating); // logs average rating of recipe1

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients); // logs total ingredients of recipe1

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel); // logs difficulty level of recipe1

// Update recipe1 with calculated values
recipe1.averageRating = getAverageRating(recipe1.ratings);
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

// Update recipe2 with calculated values
recipe2.averageRating = getAverageRating(recipe2.ratings);
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

// Update recipe3 with calculated values
recipe3.averageRating = getAverageRating(recipe3.ratings);
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

// Log the final recipes array with all updated values
console.log(recipes);