import { Game } from './game';

const game = new Game();

document.addEventListener('DOMContentLoaded', () => {

  // LOAD GAME AND EXIT MAIN MENU
  const loadGame = document.getElementById('startNewGameButtonInitial');
  loadGame.addEventListener('click', function() { game.run(true); });

  // START NEW GAME BUTTON LOGIC
  const startNewGameButton = document.getElementById('startNewGameButton');
  startNewGameButton.addEventListener('click', function() { game.run(true); });

  // STOP GAME BUTTON LOGIC
  const stopGameButton = document.getElementById('stopGameButton');
  stopGameButton.addEventListener('click',  function() { 
    game.run(false);
    document.getElementById('inactive-game-container').style.display = "none";
    document.getElementById('active-game-container').style.display = "block";

  }, false);

  // EXIT GAME BUTTON LOGIC
  const exitGameButton = document.getElementById('exitGameButton');
  exitGameButton.addEventListener('click',  function() { 
    game.run(false);
    document.getElementById('inactive-game-container').style.display = "block";
    document.getElementById('active-game-container').style.display = "none";

  }, false);

});