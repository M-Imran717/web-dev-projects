let statement = document.querySelector('.statement');
let progressbar = document.querySelector('.progress');
let options_text = document.querySelectorAll('.option-text');
let options = document.querySelectorAll('.options')
let timer = document.querySelector('.timer');
let question_no = document.querySelector('.Question_no');
let remaining_perc = document.querySelector('.Remaining');
let button = document.querySelector('.button');

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


function ShowQuestions(question){
  statement.textContent = `${question.statement}`;
  options_text[0].textContent = `${question.options[0]}`;
  options_text[1].textContent = `${question.options[1]}`;
  options_text[2].textContent = `${question.options[2]}`;
  options_text[3].textContent = `${question.options[3]}`;
}

let quest_no = 0;
ShowQuestions(questions[0]);
function GoToNext(){
  options.forEach((option)=>{
    option.querySelector('div').style.backgroundColor = 'white';
  })
  button.disabled = true;
  if(quest_no < questions.length -1)
    quest_no += 1;
  ShowQuestions(questions[quest_no])
  change_progress_percent((questions.length),quest_no+1)

}

// code to calculate total time

function Cal_Total_Time(total_seconds){
  let total_hour = Math.floor(total_seconds/3600);
  let remaining = total_seconds % 3600;
  let total_min = Math.floor(remaining/60);
  let total_sec = remaining%60;
  let total_time = `⏰ ${String(total_hour).padStart(2,'0')}:${String(total_min).padStart(2,'0')}:${String(total_sec).padStart(2,'0')}`;
  return total_time;
}


//Now we write code for timer 
function Timer(time){
  timer.textContent = Cal_Total_Time(time);
  time--;
  if(time > 0){
    setTimeout(()=>Timer(time),1000);
  }else{
    console.log('Time Out : ')
    return
  }
}

//function will take two variables totalquestions,timeforeachquestion
function Cal_Time_In_Sec(t_quest,time){
  let total_sec = t_quest * time;
  return total_sec;
}


//function to calculate the remaining percentage of questions
function Cal_Percent(t_quest,c_quest){
  let percent = Math.floor((c_quest/t_quest) * 100);
  return percent
}

//function to randomly change the progress bar and remaining percentage
function change_progress_percent(t_quest,c_quest){
 let remainingPerc = Cal_Percent(t_quest,c_quest)
 //set progress_bar 
 progressbar.value = remainingPerc
 //set remaining percentage
 remaining_perc.textContent = `${remainingPerc} %`
// set question number 
question_no.textContent = `Question ${c_quest} of ${t_quest}`;
}


// Now we add event listner 
let selected = false;
options.forEach((option)=>{
  option.addEventListener('click',()=>{
    let id = option.getAttribute('id');
    if (id == questions[quest_no].correct){
      option.querySelector('div').style.backgroundColor = 'green';
    }else{
      option.querySelector('div').style.backgroundColor = 'red';
      let idx = questions[quest_no].correct;
    options[idx].querySelector('div').style.backgroundColor = 'green';
    }
    button.disabled = false;
    if(quest_no == 0 && selected == false){
      selected = true;
      Timer(Cal_Time_In_Sec(questions.length , 5));
    }
    console.log(id)
  })
})