const scores = [
  {
    id: 1,
    name: 'Ahmad',
    mark: 100,
  },
  {
    id: 2,
    name: 'Jawad',
    mark: 98,
  },
  {
    id: 3,
    name: 'Modasir',
    mark: 90,
  },
  {
    id: 4,
    name: 'Bashar Ahmad',
    mark: 95,
  },
  {
    id: 5,
    name: 'Shaheer Ahmad',
    mark: 90,
  },
];

scores.forEach((score) => {
  const scoreContainer = document.querySelector('.list');
  const markDiv = document.createElement('li');
  markDiv.innerHTML = `
            ${score.name}: ${score.mark}
           `;
  scoreContainer.append(markDiv);
});