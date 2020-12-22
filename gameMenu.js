
/**
 * In this function you can choose between normal and fullscreen mode
 */

function gameMode() {
  document.getElementById("normalmode-btn").classList.remove("d-none");

  document.getElementById("fullscreenmode-btn").classList.remove("d-none");

  document.getElementById("description1").classList.remove("d-none");

  document.getElementById("description2").classList.remove("d-none");

  document.getElementById("description3").classList.remove("d-none");

  document.getElementById("description4").classList.remove("d-none");

  document.getElementById("start-btn").classList.add("d-none");
}



/**
 * In this function you can open the game in fullscreen mode
 */

function fullscreenGame() {
  start_screen = false;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.8;

  document.getElementById("canvas").classList.add("fullscreen");

  document.getElementById("h1").classList.add("d-none");

  document.getElementById("description1").classList.add("d-none");

  document.getElementById("description2").classList.add("d-none");

  document.getElementById("description3").classList.add("d-none");

  document.getElementById("description4").classList.add("d-none");

  document.getElementById("body").classList.add("body-fullscreen");

  document.getElementById("start-btn").classList.add("d-none");

  document.getElementById("normalmode-btn").classList.add("d-none");

  document.getElementById("fullscreenmode-btn").classList.add("d-none");

  if (canvas.requestFullscreen) {
    canvas.requestFullscreen();
  }
}



/**
 * In this function you can open the game in normal mode
 */

function startNormal() {
  
  start_screen = false;

  document.getElementById("normalmode-btn").classList.add("d-none");

  document.getElementById("fullscreenmode-btn").classList.add("d-none");

  document.getElementById("description1").classList.add("d-none");

  document.getElementById("description2").classList.add("d-none");

  document.getElementById("description3").classList.add("d-none");

  document.getElementById("description4").classList.add("d-none");
}


/**
 * In this function you can restart the game
 */

function restart(){

  document.getElementById('restart-btn').classList.add('d-none');

  document.getElementById('start-btn').classList.remove('d-none');

  start_screen = true;

  game_over = false;

  






}
