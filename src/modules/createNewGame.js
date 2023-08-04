const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const creeatNewGame = async () => {
  try {
    const result = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'My cool new game',
      }),
    });

    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error('oops, new game has not created');
  }
};
// creeatNewGame();
export default creeatNewGame;