import { NewGame } from './new-game';

// Since it's a class, we need to instantiate it before we can use it.

const newGame = new NewGame();
document.addEventListener('DOMContentLoaded', () => {
  const startNewGameButton = document.getElementById('startNewGameButton');
  startNewGameButton.addEventListener('click', newGame.start);

});