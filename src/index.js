import { NewGame } from './new-game';

const newGame = new NewGame();
document.addEventListener('DOMContentLoaded', () => {
  const startNewGameButton = document.getElementById('startNewGameButton');
  startNewGameButton.addEventListener('click', newGame.start);
});