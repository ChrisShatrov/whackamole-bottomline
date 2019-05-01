import { Game } from './game';

const game = new Game();

document.addEventListener('DOMContentLoaded', () => {

  const loadGame = document.getElementById('startNewGameButtonInitial');
  loadGame.addEventListener('click', game.run);

  const startNewGameButton = document.getElementById('startNewGameButton');
  startNewGameButton.addEventListener('click', game.run);

  const stopGameButton = document.getElementById('stopGameButton');
  stopGameButton.addEventListener('click',  function() { 

    document.getElementById('inactive-game-container').style.display = "none";
    document.getElementById('active-game-container').style.display = "block";

  }, false);

  const exitGameButton = document.getElementById('exitGameButton');
  exitGameButton.addEventListener('click',  function() { 

    document.getElementById('inactive-game-container').style.display = "block";
    document.getElementById('active-game-container').style.display = "none";

  }, false);

});