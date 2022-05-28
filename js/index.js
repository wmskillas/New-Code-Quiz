var questionList = document.getElementById("questions");
var choiceList = document.getElementById("choices");
var subBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var nameEl = document.getElementById("name");
var responseEl = document.getElementById("response");
var scoreEl = document.getElementsByClassName("score");

var questionsCounter = 0;
var score = 0;
var saveScores = [];

var startQuiz = () => {
  score = 0;
  var startScreen = document.getElementById("startScreen");
  startScreen.setAttribute("class", "hide");

  questionList.removeAttribute("class", "hide");

  getQuestions();
};

var getQuestions = () => {
  var currentQuestion = questions[questionsCounter];

  var questionTitle = document.getElementById("questionTitle");
  questionTitle.textContent = currentQuestion.question;

  choiceList.innerHTML = "";

  currentQuestion.choices.forEach(function (choice, i) {
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("id", i);
    choiceButton.setAttribute("value", choice);
    choiceButton.setAttribute("onclick", "questionResponse(this.id)");

    choiceButton.textContent = i + 1 + "/" + choice;
    // choiceButton.onclick = questionResponse;
    choiceList.appendChild(choiceButton);
  });
};

var questionResponse = (pick) => {
  console.log(questions[questionsCounter].answer);
  console.log(pick);
  if (pick === questions[questionsCounter].answer) {
    responseEl.textContent = "Correct";
    score = ++score;
  } else {
    responseEl.textContent = "Incorrect!";
  }

  responseEl.setAttribute("class", "response");
  setTimeout(function () {
    responseEl.setAttribute("class", "response hide");
  }, 1000);

  questionsCounter++;

  if (questionsCounter === questions.length) {
    endQuiz();
  } else {
    getQuestions();
  }
};

var endQuiz = () => {
  var endScreen = document.getElementById("end-Screen");
  endScreen.removeAttribute("class");

  document.getElementById("score").innerHTML = score;
};

var saveUserScore = () => {
  var name = nameEl.value;
  console.log(name);

  var userNameScoreData = {
    name: name,
    score: score,
  };
  //   console.log(userNameScoreData)

  if (name !== "") {
    var pikachu = JSON.parse(window.localStorage.getItem("userScore")) || [];
    pikachu.forEach((data) => {
      saveScores.push(data);
    });
    saveScores.push(userNameScoreData);
    console.log(saveScores);
    window.localStorage.setItem("userScore", JSON.stringify(saveScores));
    window.location.href = "scores.html";
  } else {
    window.alert("Please Enter a Name");
  }
};

subBtn.onclick = saveUserScore;
startBtn.onclick = startQuiz;
