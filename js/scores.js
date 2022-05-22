const printScores = () => {

const scores  = JSON.parse(window.localStorage.getItem("scores"))

scores.sort((a, b) => {
    return b.score - a.score
});

scores.forEach((score) => {

    const list = document.createElement('li');
    list.textContent = score.name + ' / ' + score.score;

    const oList = document.getElementById('scores');
    oList.appendChild(list);
});
}

printScores(); 