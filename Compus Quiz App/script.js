let statement = document.querySelector('.statement');
let progressbar = document.querySelector('.progress_bar');
let options = document.querySelectorAll('.options');
let timer = document.querySelector('.timer');
let question_no = document.querySelector('.Question_no');
let remaining_perc = document.querySelector('.Remaining');
// list of questions 
let questions = [
  {
    statement: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correct: 2
  },
  {
    statement: "What is the capital of Pakistan?",
    options: ["Lahore", "Karachi", "Islamabad", "Quetta"],
    correct: 2
  },
  {
    statement: "2 + 2 x 2 = ?",
    options: ["6", "8", "4", "10"],
    correct: 0
  },
  {
    statement: "Which planet is known as the Red Planet?",
    options: ["Venus", "Jupiter", "Mars", "Saturn"],
    correct: 2
  },
  {
    statement: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: 3
  },
  {
    statement: "Who wrote the national anthem of Pakistan?",
    options: ["Allama Iqbal", "Hafeez Jalandhari", "Faiz Ahmed Faiz", "Mirza Ghalib"],
    correct: 1
  },
  {
    statement: "What is the chemical symbol for Water?",
    options: ["CO2", "O2", "H2O", "NaCl"],
    correct: 2
  },
  {
    statement: "Which language is used to make websites?",
    options: ["Python", "Java", "HTML", "C++"],
    correct: 2
  },
  {
    statement: "What is 10 x 10?",
    options: ["20", "100", "1000", "10"],
    correct: 1
  },
  {
    statement: "Which animal is known as Man's Best Friend?",
    options: ["Cat", "Dog", "Horse", "Parrot"],
    correct: 1
  },
  {
    statement: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Bangkok", "Tokyo"],
    correct: 3
  },
  {
    statement: "How many days are there in a Leap Year?",
    options: ["365", "366", "364", "367"],
    correct: 1
  },
  {
    statement: "Which is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correct: 2
  },
  {
    statement: "What is the full form of CPU?",
    options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Program Unit"],
    correct: 1
  },
  {
    statement: "Which gas do plants use for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correct: 2
  },
  {
    statement: "What is the largest desert in the world?",
    options: ["Sahara", "Thar", "Gobi", "Arabian"],
    correct: 0
  },
  {
    statement: "Who is the founder of Pakistan?",
    options: ["Allama Iqbal", "Liaquat Ali Khan", "Quaid-e-Azam", "Sir Syed Ahmed Khan"],
    correct: 2
  },
  {
    statement: "What is the square root of 144?",
    options: ["10", "11", "12", "14"],
    correct: 2
  },
  {
    statement: "Which is the fastest land animal?",
    options: ["Lion", "Horse", "Cheetah", "Deer"],
    correct: 2
  },
  {
    statement: "In which year did Pakistan come into being?",
    options: ["1945", "1946", "1947", "1948"],
    correct: 2
  }
];



// Function to display the details of each individual object 
function FetchQuestions(q,i){
    let statement = q.statement;
    let options = q.options;
    let correct = q.correct;

}

// peice of code to call the FetchQuestions function for all the questions
let i = 1; 
for (let q of questions){
    FetchQuestions(q,i++)
}