

/**
 * This function can choose between normal and fullscreen mode
 */

function gameMode() {
  start_screen = false;
  fullscreen = false;



  document.getElementById("start-btn").classList.add("d-none");
  checkForCollision_new();
}


/**
 * This function  can restart the game
 */

function restart(){

  document.getElementById('restart-btn').classList.add('d-none');

  document.getElementById('start-btn').classList.remove('d-none');

  start_screen = true;

  game_over = false;

  //game_finished = false; 

  live_energy = 100; 

  collectedCoins = 0;

  collectedBottles = 5;

  bg_elements = 0;

  
}









