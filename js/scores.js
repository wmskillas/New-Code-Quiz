var showNameScore = () => {
  var getUserScore = JSON.parse(window.localStorage.getItem("userScore")) || [];
  console.log(getUserScore);

  getUserScore.forEach((userScore) => {
    var listTag = document.createElement("li");
    listTag.textContent =
      "Name: " + userScore.name + " Score: " + userScore.score;

    var oListTag = document.getElementById("userScore");
    oListTag.appendChild(listTag);
    console.log(oListTag);
  });
};

showNameScore();
