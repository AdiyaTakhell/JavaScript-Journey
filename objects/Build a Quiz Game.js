// Create an array named questions with at least five objects
const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "Which is the largest ocean on Earth?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Math",
    question: "What is the square root of 64?",
    choices: ["6", "8", "10"],
    answer: "8"
  },
  {
    category: "Sports",
    question: "Which country won the FIFA World Cup in 2018?",
    choices: ["Germany", "France", "Brazil"],
    answer: "France"
  }
];

// Function to return a random question object
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

// Function to return a random choice from the available choices
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

// Function to check if the computer's choice is correct
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}

// Example usage:
const randomQuestion = getRandomQuestion(questions);
console.log("Question:", randomQuestion.question);

const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Computer's choice:", computerChoice);

console.log(getResults(randomQuestion, computerChoice));