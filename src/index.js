import './style.css';
import { addScore, displayList, url } from './modules/api.js';

const form = document.querySelector('#form');
const name = document.querySelector('#name');
const score = document.querySelector('#score');
const refreshBtn = document.querySelector('#refreshBtn');

const AddNameScore = async (event) => {
  event.preventDefault();
  if (name.value.trim() && score.value.trim()) {
  await addScore({ user: name.value, score: score.value });
  name.value = '';
  score.value = '';
  }
  else {
    return false;
  }
};

const displayNameScore = async () => {
  const fetchResult = await fetch(url);
  const data = await fetchResult.json();
  displayList(data.result);  
};

displayNameScore();

form.addEventListener('submit', AddNameScore);
refreshBtn.addEventListener('click', displayNameScore);
