const chalk = require('chalk')
console.log(chalk.hex('#005b96').bold('Welcome to Friends!!..Good Luck'))
console.log('\n---------------------------------')

const readLineSync = require('readline-sync')
var score = 0

function play(question, answer) {
  var userInput = readLineSync.question(question)
  if (userInput.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green('>> correct'))
    score++
  } else {
    console.log(chalk.red('\n>> wrong!!'))
    console.log(chalk.green('The correct answer is ' + answer))
  }
  console.log('------------------------\n')
}

const highScore = [
  {
    name: 'Samuela',
    score: '8',
  },
]

questions = [
  {
    question: 'Q1. What is my last name?\n\t',
    answer: 'Ralte',
  },
  {
    question: 'Q2. Where do i live(State)?\n\t',
    answer: 'Mizoram',
  },
  {
    question: 'Q3. What is my birthday month?\n\t',
    answer: 'June',
  },
  {
    question: 'Q4. What is my birth year?\n\t',
    answer: '2000',
  },
  {
    question: 'Q5. What is my favorite sport?\n\t',
    answer: 'Football',
  },
  {
    question: 'Q6. What is my favorite color?\n\t',
    answer: 'Blue',
  },
  {
    question: 'Q7. What is my favorite food?\n\t',
    answer: 'Potato',
  },
  {
    question: 'Q8. Who is my favorite superhero?\n\t',
    answer: 'Batman',
  },
  {
    question: 'Q9. What is my favorite movie?\n\t',
    answer: 'Dark',
  },
  {
    question: "Q10. What is my favorite mobile game?'\n\t",
    answer: 'Mobile Legends',
  },
]

for (i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}
console.log(
  chalk.hex('#005b96')('Congratulation!! Your scored : ' + score + '/20'),
)

if (score > highScore[0].score) {
  console.log('Yay..!!, you beat the high score')
} else {
  console.log('\n\tHigh Score')
  console.log('----------------\n')
  console.log('  Name : ' + highScore[0].name)
  console.log('\n  Score : ' + highScore[0].score + '\n')
}
