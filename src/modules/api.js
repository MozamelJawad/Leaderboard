const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/B0mu7sU9pBCPIqrAki95/scores/';

const list = document.querySelector('.list');

const addScore = async (score) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });
};

const displayList = (scores) => {
  list.innerHTML = '';
  scores.forEach((score) => {
    list.innerHTML += `
            <li>${score.user}: ${score.score}</li>
        `;
  });
};

export { addScore, displayList, url };