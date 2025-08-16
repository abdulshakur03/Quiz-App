const questions = [
  {
    question: "What is the capital city of Finland?",
    answers: [
      { text: "Stockholm", correct: false },
      { text: "Copenhagen", correct: false },
      { text: "Helsinki", correct: true },
      { text: "Oslo", correct: false },
    ],
  },
  {
    question: "In what year did the Berlin Wall fall?",
    answers: [
      { text: "1989", correct: true },
      { text: "1985", correct: false },
      { text: "1991", correct: false },
      { text: "1995", correct: false },
    ],
  },
  {
    question: "Which planet is the largest in our solar system?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Neptune", correct: false },
    ],
  },
  {
    question: "How many hearts does an octopus have?",
    answers: [
      { text: "One", correct: false },
      { text: "Two", correct: false },
      { text: "Three", correct: true },
      { text: "Four", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for the element gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Gd", correct: false },
    ],
  },
  {
    question: "What is the longest river in the world?",
    answers: [
      { text: "The Amazon River", correct: false },
      { text: "The Nile River", correct: true },
      { text: "The Yangtze River", correct: false },
      { text: "The Mississippi River", correct: false },
    ],
  },
  {
    question: "What is the study of insects called?",
    answers: [
      { text: "Ornithology", correct: false },
      { text: "Entomology", correct: true },
      { text: "Biology", correct: false },
      { text: "Ichthyology", correct: false },
    ],
  },
  {
    question: "Who is the first person to travel into space?",
    answers: [
      { text: "Neil Armstrong", correct: false },
      { text: "Yuri Gagarin", correct: true },
      { text: "Buzz Aldrin", correct: false },
      { text: "Alan Shepard", correct: false },
    ],
  },
  {
    question: "What is the most common surname in the United States?",
    answers: [
      { text: "Johnson", correct: false },
      { text: "Williams", correct: false },
      { text: "Jones", correct: false },
      { text: "Smith", correct: true },
    ],
  },
  {
    question:
      "What is the name of the fictional wizarding school in the Harry Potter series?",
    answers: [
      { text: "Beauxbatons", correct: false },
      { text: "Durmstrang", correct: false },
      { text: "Hogwarts", correct: true },
      { text: "Ilvermorny", correct: false },
    ],
  },
  {
    question: "In what year did the first modern Olympic Games take place?",
    answers: [
      { text: "1888", correct: false },
      { text: "1896", correct: true },
      { text: "1904", correct: false },
      { text: "1912", correct: false },
    ],
  },
  {
    question: `Which country is known as the "Land of the Rising Sun"?`,
    answers: [
      { text: "China", correct: false },
      { text: "South Korea", correct: false },
      { text: "Japan", correct: true },
      { text: "Thailand", correct: false },
    ],
  },
  {
    question: "What is the fear of heights called?",
    answers: [
      { text: "Claustrophobia", correct: false },
      { text: "Hydrophobia", correct: false },
      { text: "Arachnophobia", correct: false },
      { text: "Acrophobia", correct: true },
    ],
  },
  {
    question: "What is the name of the world's largest rainforest?",
    answers: [
      { text: "The Congo Rainforest", correct: false },
      { text: "The Daintree Rainforest", correct: false },
      { text: "The Amazon Rainforest", correct: true },
      { text: "The Valdivian Temperate Rainforest", correct: false },
    ],
  },
  {
    question:
      "In what year did Nigeria gain its independence from British rule?",
    answers: [
      { text: "1958", correct: false },
      { text: "1960", correct: true },
      { text: "1963", correct: false },
      { text: "1970", correct: false },
    ],
  },
  {
    question: `Which planet is known as the "Red Planet"?`,
    answers: [
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Southern Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: " Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Who is the author of the popular manga series One Piece?",
    answers: [
      { text: "Masashi Kishimoto", correct: false },
      { text: "Eiichiro Oda", correct: true },
      { text: "Akira Toriyama", correct: false },
      { text: "Tite Kubo", correct: false },
    ],
  },
  {
    question:
      "The Great Wall of China is a series of fortifications built across the historical northern borders of ancient Chinese states. It is the world's longest man-made structure. Can you see it from space?",
    answers: [
      { text: "Yes, it's clearly visible to the naked eye.", correct: false },
      { text: "Yes, but only with a powerful telescope.", correct: false },
      {
        text: "No, it's not visible to the naked eye from Earth's orbit.",
        correct: true,
      },
      { text: "It's only visible during a specific season.", correct: false },
    ],
  },
  {
    question: "What is the largest organ in the human body?",
    answers: [
      { text: "The heart", correct: false },
      { text: "The liver", correct: false },
      { text: "The brain", correct: false },
      { text: "The skin", correct: true },
    ],
  },
];
const questionArea = document.querySelector(".question-area");
const answersContainer = document.querySelector(".answers-container");
const nextButton = document.querySelector(".next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetAnswers();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  questionArea.innerHTML = `${questionNumber}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.innerHTML = answer.text;
    button.dataset.correct = answer.correct;
    answersContainer.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
  });
}

function resetAnswers() {
  nextButton.style.display = "none";
  while (answersContainer.firstChild) {
    answersContainer.removeChild(answersContainer.firstChild);
  }
}

function selectAnswers(e) {
  const selectedBtn = e.target;
  if (selectedBtn.classList.contains("option")) {
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answersContainer.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = "true";
      nextButton.style.display = "block";
    });
  }
}

function showScore() {
  resetAnswers();
  questionArea.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.textContent = " Play Again";
  nextButton.style.display = "block";
}

function handleNextBtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    // startQuiz();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});
answersContainer.addEventListener("click", selectAnswers);
showQuestion();
