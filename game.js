const IMG1 = "./img/bg_elem_1.png";
const IMG2 = "./img/bg_elem_2.png";
const IMG3 = "./img/charakter_1.png";
const IMG4 = "./img/charakter_2.png";
const IMG5 = "./img/charakter_3.png";
const IMG6 = "./img/charakter_4.png";
const IMG7 = "./img/charakter_jumping.png";
const IMG8 = "./img/charakter_left_1.png";
const IMG9 = "./img/charakter_left_2.png";
const IMG10 = "./img/charakter_left_3.png";
const IMG11 = "./img/charakter_left_4.png";
const IMG12 = "./img/chicken_big.png";
const IMG13 = "./img/chicken_dead.png";
const IMG14 = "./img/chicken1.png";
const IMG15 = "./img/chicken2.png";
const IMG16 = "./img/cloud1.png";
const IMG17 = "./img/cloud2.png";
const IMG18 = "./img/hit.png";
const IMG19 = "./img/sand.png";
const IMG20 = "./img/tabasco.png";

let imagePaths = [
  IMG1,
  IMG2,
  IMG3,
  IMG4,
  IMG5,
  IMG6,
  IMG7,
  IMG8,
  IMG9,
  IMG10,
  IMG11,
  IMG12,
  IMG13,
  IMG14,
  IMG15,
  IMG16,
  IMG17,
  IMG18,
  IMG19,
  IMG20,
];

let canvas;

let ctx;

let character_x = 100;

let character_y = 135;

let chickenyellow_x;

let chickenyellow_y;

let current_yellowchicken_index;

let chickenbrown_x;

let chickenbrown_y;

let current_brownchicken_index;

let live_energy = 100;

let start_screen = true;

let game_over = false;

let character_energy = 100;

let final_boss_energy = 100;

let isMovingRight = false;

let isMovingLeft = false;

let isJumping = false;

let isThrowing = false;

let isHurt = false;

let isSleep = false;

let isDead = false;

let isInactive = false;

let bg_elements = 0;

let lastJumpStarted = 0;

let currentCharacterImage = "img/charakter_walk_1.png";

let currentJumpImage = "img/charakter_jump_1.png";

let currentyellowChickenImage = "img/yellow_chicken_1.png";

let currentbrownChickenImage = "img/brown_chicken_1.png";

let currentbossChickenImage =
  "img/chicken_boss/chicken_boss_walk/chicken_boss_walk_1.png";

let currentrotateBottleImage = "img/tabasco_rotate_1.png";

let currentbrokeBottleImage = "img/tabasco_broken_1.png";

let currenthurtCharakterImage = "img/charakter_hurt_1.png";

let currentdeadCharakterImage = "img/charakter_hurt_1.png";

let currentinactiveCharakterImage = "img/charakter_inactive_1.png";

let currentsleepCharakterImage = "img/charakter_sleep_1.png";

let characterGraphicsRight = [
  "img/charakter_walk_1.png",
  "img/charakter_walk_2.png",
  "img/charakter_walk_3.png",
  "img/charakter_walk_4.png",
  "img/charakter_walk_5.png",
  "img/charakter_walk_6.png",
];

let brownChicken = [
  "img/brown_chicken_1.png",
  "img/brown_chicken_2.png",
  "img/brown_chicken_3.png",
];

let yellowChicken = [
  "img/yellow_chicken_1.png",
  "img/yellow_chicken_2.png",
  "img/yellow_chicken_3.png",
];

let bossChicken = [
  "img/chicken_boss/chicken_boss_walk/chicken_boss_walk_1.png",
  "img/chicken_boss/chicken_boss_walk/chicken_boss_walk_2.png",
  "img/chicken_boss/chicken_boss_walk/chicken_boss_walk_3.png",
  "img/chicken_boss/chicken_boss_walk/chicken_boss_walk_4.png",
];

let jumpCharacter = [
  // "img/charakter_jump_1.png",
  // "img/charakter_jump_2.png",
  // "img/charakter_jump_3.png",
  // "img/charakter_jump_4.png",
  "img/charakter_jump_5.png",
  "img/charakter_jump_6.png",
  "img/charakter_jump_7.png",
  "img/charakter_jump_8.png",
  "img/charakter_jump_9.png",
];

let hurtCharakter = [
  "img/charakter_hurt_1.png",
  "img/charakter_hurt_2.png",
  "img/charakter_hurt_3.png",
];

let deadCharakter = [
  "img/charakter_dead_1.png",
  "img/charakter_dead_2.png",
  "img/charakter_dead_3.png",
  "img/charakter_dead_4.png",
  "img/charakter_dead_5.png",
  "img/charakter_dead_6.png",
  "img/charakter_dead_7.png",
];

let inactiveCharakter = [
  "img/charakter_inactive_1.png",
  "img/charakter_inactive_2.png",
  "img/charakter_inactive_3.png",
  "img/charakter_inactive_4.png",
  "img/charakter_inactive_5.png",
  "img/charakter_inactive_6.png",
  "img/charakter_inactive_7.png",
  "img/charakter_inactive_8.png",
  "img/charakter_inactive_9.png",
  "img/charakter_inactive_10.png",
];

let sleepCharakter = [
  "img/charakter_sleep_1.png",
  "img/charakter_sleep_2.png",
  "img/charakter_sleep_3.png",
  "img/charakter_sleep_4.png",
  "img/charakter_sleep_5.png",
  "img/charakter_sleep_6.png",
  "img/charakter_sleep_7.png",
  "img/charakter_sleep_8.png",
  "img/charakter_sleep_9.png",
  "img/charakter_sleep_10.png",
];

let rotateBottle = [
  "img/tabasco_rotate_1.png",
  "img/tabasco_rotate_2.png",
  "img/tabasco_rotate_3.png",
  "img/tabasco_rotate_4.png",
];

let brokeBottle = [
  "img/tabasco_broken_1.png",
  "img/tabasco_broken_2.png",
  "img/tabasco_broken_3.png",
  "img/tabasco_broken_4.png",
  "img/tabasco_broken_5.png",
  "img/tabasco_broken_6.png",
];

let characterGraphicIndex = 0;

let characterJumpIndex = 0;

let yellowChickenGraphicIndex = 0;

let brownChickenGraphicIndex = 0;

let bossChickenGraphicIndex = 0;

let rotateBottleIndex = 0;

let brokeBottleIndex = 0;

let charakterHurtIndex = 0;

let charakterDeadIndex = 0;

let charakterInactiveIndex = 0;

let charakterSleepIndex = 0;

let chickens_1 = [];

let chickens_2 = [];

let placedBottles = [
  1000,
  1700,
  2500,
  2800,
  3000,
  3300,
  3500,
  3700,
  3900,
  4200,
  4400,
];

let placedCoins_x = [
  500,
  650,
  800,
  950,
  1100,
  1250,
  1500,
  1700,
  1900,
  2100,
  2300,
  2500,
  2700,
  3000,
];

let placedLifes_x = [400, 500, 800, 1000, 1200, 1400, 1800, 2000, 2200, 2400];

let placedCoins_y = [];

let collectedBottles = 20;

let collectedCoins = 0;

let bottleThrowTime = 0;

let thrownBottle_x = 0;

let thrownBottle_y = 0;

let bossDefeatedAt = 0;

let game_finished = false;

let character_lost_at = 0;

// -------------- Game config

let JUMP_TIME = 300; // in ms

let GAME_SPEED = 10;

let BOSS_POSITION = 10000;

let AUDIO_RUNNING = new Audio("audio/running.mp3");

let AUDIO_JUMP = new Audio("audio/jump.mp3");

let AUDIO_BOTTLE = new Audio("audio/bottle.mp3");

let AUDIO_THROW = new Audio("audio/throw.mp3");

let AUDIO_CHICKEN = new Audio("audio/chicken.mp3");

let AUDIO_GLASS = new Audio("audio/glass.mp3");

let AUDIO_BACKGROUND_MUSIC = new Audio("audio/music.mp3");

let AUDIO_WIN = new Audio("audio/win.mp3");

AUDIO_BACKGROUND_MUSIC.loop = false;

AUDIO_BACKGROUND_MUSIC.volume = 0.2;

//function preloadImages(){

//for(let i = 0; i < imagePaths.length; i++) {

//let image = new Image();

//image.src = imagePaths[i];

//imagePaths.push(image);

//}

//}

function init() {
  canvas = document.getElementById("canvas");

  ctx = canvas.getContext("2d");

  checkForRunning();

  yellowChicken_move();

  brownChicken_move();

  bossChicken_move();

  create_newChicken();

  draw();

  listenForKeys();

  moveBottle();

  animatedJump();

  calculateChickenYellowPosition();

  calculateChickenBrownPosition();

  checkForCollision_new();
}

/**
 * This function checks whether the figure collides with a yellow chicken
 */

function checkChickenYellow() {
  setInterval(function () {
    for (let i = 0; i < chickens_1.length; i++) {
      if (
        chickens_1[i].chickenyellow_x - 80 < character_x &&
        chickens_1[i].chickenyellow_x - 10 > character_x
      ) {
        if (character_y > 90) {
          live_energy = live_energy - 2;
          //isHurt = true;

          if (charakterHurtIndex > 2) {
            isHurt = false;
          }
        }

        if (live_energy < 0) {
          live_energy = 0;
          game_over = true;
          // isHurt = false;
          // isDead = true;
        }

        if (live_energy > 0) {
          //isDead = false;
        }
      }
    }
  }, 100);
}

/**
 * This function checks whether the figure collides with a brown chicken
 */

function checkChickenBrown() {
  setInterval(function () {
    for (let i = 0; i < chickens_2.length; i++) {
      if (
        chickens_2[i].chickenbrown_x - 80 < character_x &&
        chickens_2[i].chickenbrown_x + 20 > character_x
      ) {
        if (character_y > 90) {
          live_energy = live_energy - 2;
          //isHurt = true;

          if (charakterHurtIndex > 2) {
            isHurt = false;
          }
        }

        if (live_energy < 0) {
          live_energy = 0;
          // isHurt = false;
          // isDead = true;
        }

        if (live_energy > 0) {
          //isDead = false;
        }
      }
    }
  }, 100);
}

/**
 * This function checks whether the figure collides with a bottle
 */

function checkBottle() {
  setInterval(function () {
    for (let i = 0; i < placedBottles.length; i++) {
      let bottle_x = placedBottles[i] + bg_elements;

      if (bottle_x - 60 < character_x && bottle_x + 60 > character_x) {
        placedBottles.splice(i, 1);
        AUDIO_BOTTLE.play();
        collectedBottles++;
      }
    }
  }, 100);
}

/**
 * This function checks whether the figure collides with a Life
 */

function checkLife() {
  setInterval(function () {
    for (let i = 0; i < placedLifes_x.length; i++) {
      let life_x = placedLifes_x[i] + bg_elements;

      if (life_x - 30 < character_x && life_x + 30 > character_x) {
        placedLifes_x.splice(i, 1);
        if (live_energy >= 0 && live_energy < 90) {
          live_energy = live_energy + 10;
        }
      }
    }
  }, 100);
}

/**
 * This function checks whether the figure collides with a Coin
 */

function checkCoins() {
  setInterval(function () {
    for (let i = 0; i < placedCoins_x.length; i++) {
      let coins_x = placedCoins_x[i] + bg_elements;

      if (coins_x - 40 < character_x && coins_x + 50 > character_x) {
        placedCoins_x.splice(i, 1);
        collectedCoins++;
      }
    }
  }, 100);
}

/**
 * This function checks whether the figure collides with the boss Chicken
 */

function checkBoss() {
  setInterval(function () {
    if (
      thrownBottle_x > BOSS_POSITION + bg_elements - 100 &&
      thrownBottle_x < BOSS_POSITION + bg_elements + 100
    ) {
      if (final_boss_energy > 0) {
        final_boss_energy = final_boss_energy - 10;

        AUDIO_GLASS.play();
      } else if (bossDefeatedAt == 0) {
        bossDefeatedAt = new Date().getTime();
        finishLevel();
      }
    }
  }, 100);
}

/**
 * This function checks whether the figure collides with another element
 */
function checkForCollision_new() {
  checkChickenYellow();

  checkChickenBrown();

  checkBottle();

  checkLife();

  checkCoins();

  checkBoss();
}

function finishLevel() {
  AUDIO_CHICKEN.play();

  setTimeout(function () {}, 500);

  game_finished = true;

  AUDIO_WIN.play();
}

/**
 * This function create new  brown and yellow chicken
 */

function create_newChicken() {
  for (let i = 300; i < 8000; i = i + 500) {
    chickens_1.push({
      chickenyellow_x: i,
      chickenyellow_y: 370,
      currentyellowChickenImage: "img/yellow_chicken_1.png",
      current_yellowchicken_index: 0,
      speed: 20 + Math.random() * 20,
    });
  }

  for (let i = 600; i < 8000; i = i + 700) {
    chickens_2.push({
      chickenbrown_x: i,
      chickenbrown_y: 360,
      currentyellowChickenImage: "img/brown_chicken_1.png",
      current_brownchicken_index: 0,
      speed: 15 + Math.random() * 30,
    });
  }
}

/**
 * This function change the picture for the yellow chicken so that it moves
 */

function yellowChicken_move() {
  setInterval(function () {
    let index = yellowChickenGraphicIndex % yellowChicken.length;

    currentyellowChickenImage = yellowChicken[index];

    yellowChickenGraphicIndex = yellowChickenGraphicIndex + 1;
  }, 400);
}

/**
 * This function change the picture for the brown chicken so that it moves
 */

function brownChicken_move() {
  setInterval(function () {
    let index = brownChickenGraphicIndex % brownChicken.length;

    currentbrownChickenImage = brownChicken[index];

    brownChickenGraphicIndex = brownChickenGraphicIndex + 1;
  }, 400);
}

/**
 * This function change the picture for the boss chicken so that it moves
 */

function bossChicken_move() {
  setInterval(function () {
    let index = bossChickenGraphicIndex % bossChicken.length;

    currentbossChickenImage = bossChicken[index];

    bossChickenGraphicIndex = bossChickenGraphicIndex + 1;
  }, 400);
}

function yellowChicken_animated() {
  let base_image = new Image();
  base_image.src = currentyellowChickenImage;

  if (base_image.complete) {
    for (i = 0; i < chickens_1.length; i++) {
      ctx.drawImage(
        base_image,
        chickens_1[i].chickenyellow_x,
        chickens_1[i].chickenyellow_y,
        base_image.width * 0.25,
        base_image.height * 0.25
      );
    }
  }
}

function brownChicken_animated() {
  let base_image = new Image();
  base_image.src = currentbrownChickenImage;

  if (base_image.complete) {
    for (i = 0; i < chickens_2.length; i++) {
      ctx.drawImage(
        base_image,
        chickens_2[i].chickenbrown_x,
        chickens_2[i].chickenbrown_y,
        base_image.width * 0.25,
        base_image.height * 0.25
      );
    }
  }
}


/**
 * This function calculate the positon from the yellow chicken 
 */

function calculateChickenYellowPosition() {
  setInterval(function () {
    for (i = 0; i < chickens_1.length; i++) {
      chickens_1[i].chickenyellow_x =
        chickens_1[i].chickenyellow_x - chickens_1[i].speed;
    }
  }, 500);
}


/**
 * This function calculate the position from the brown chicken
 */

function calculateChickenBrownPosition() {
  setInterval(function () {
    for (i = 0; i < chickens_2.length; i++) {
      chickens_2[i].chickenbrown_x =
        chickens_2[i].chickenbrown_x - chickens_2[i].speed;
    }
  }, 500);
}

/**
 * This function change the picture for the bottle rotation so that it moves
 */

function moveBottle() {
  setInterval(function () {
    if (isThrowing) {
      let index = rotateBottleIndex % rotateBottle.length;

      currentrotateBottleImage = rotateBottle[index];

      rotateBottleIndex = rotateBottleIndex + 1;
    }
  }, 200);
}


/**
 * This function change the picture for the jump animation
 */

function animatedJump() {
  setInterval(function () {
    if (isJumping) {
      let index = characterJumpIndex % jumpCharacter.length;

      currentJumpImage = jumpCharacter[index];

      characterJumpIndex = characterJumpIndex + 1;
    }
  }, 350);
}

/**
 * This function checks whether the figure is running or not
 */

function checkForRunning() {
  setInterval(function () {
    if (isMovingRight) {
      AUDIO_RUNNING.play();

      isInactive = false;

      isSleep = false;

      let index = characterGraphicIndex % characterGraphicsRight.length;

      currentCharacterImage = characterGraphicsRight[index];

      characterGraphicIndex = characterGraphicIndex + 1;
    }

    if (!isMovingRight && !isMovingLeft) {
      AUDIO_RUNNING.pause();

      // isInactive = true;

      //  setTimeout(function(){isInactive=false;
      // isSleep = true;},2000)
    }
  }, 200);
}


/**
 * This function draw all elements in the game
 */

function draw() {
  drawBackground();

  if (game_finished) {
    drawFinalScreen();

    
  } else {
    if (start_screen == false && game_over == false ) {
      updateCharacter();

      yellowChicken_animated();

      brownChicken_animated();

      drawBottles();

      drawCoins();

      drawLifes();

      draw_tabascoDisplay();

      draw_lifeDisplay();

      draw_coinDisplay();

      drawThrowBottle();
    }

    requestAnimationFrame(draw);
  }
  drawFinalBoss();
}

function drawFinalScreen() {
  ctx.font = "30px Lexend Peta";

  let msg = "Level 1 is complete !";

  if (live_energy == 0) {
    ctx.font = "50px Lexend Peta";

    msg = "You lost !";
  }
  ctx.fillText(msg, 90, 230);
}

function drawFinalBoss() {
  let chicken_x = BOSS_POSITION;

  let chicken_y = 160;

  let bossImage = currentbossChickenImage;

  if (bossDefeatedAt > 0) {
    let timePassed = new Date().getTime() - bossDefeatedAt;

    chicken_x = chicken_x + timePassed * 0.7;

    chicken_y = chicken_y - timePassed * 0.3;

    bossImage = "img/chicken_dead.png";
  }

  addBackgroundObject(bossImage, chicken_x, chicken_y, 0.23, 1);

  if (bossDefeatedAt == 0) {
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = "red";
    ctx.fillRect(
      BOSS_POSITION - 30 + bg_elements,
      95,
      2 * final_boss_energy,
      10
    );
    ctx.globalAlpha = 0.2;

    ctx.fillStyle = "black";
    ctx.fillRect(BOSS_POSITION - 32 + bg_elements, 92, 205, 15);
    ctx.globalAlpha = 1;
  }
}

function drawThrowBottle() {
  if (bottleThrowTime) {
    let timePassed = new Date().getTime() - bottleThrowTime;
    let gravity = Math.pow(9.81, timePassed / 300);

    thrownBottle_x = 150 + timePassed * 0.3;

    thrownBottle_y = 300 - (timePassed * 0.6 - gravity);

    let base_image = new Image();
    base_image.src = currentrotateBottleImage;

    if (thrownBottle_y > 320) {
      base_image.src = currentbrokeBottleImage;
    }

    if (base_image.complete) {
      ctx.drawImage(
        base_image,
        thrownBottle_x,
        thrownBottle_y,
        base_image.width * 0.25,
        base_image.height * 0.25
      );
    }
  }
}

function draw_tabascoDisplay() {
  let base_image = new Image();

  if (collectedBottles >= 0 && collectedBottles < 10) {
    base_image.src = "img/tabasco_0.png";
  } else if (collectedBottles >= 10 && collectedBottles < 20) {
    base_image.src = "img/tabasco_20.png";
  } else if (collectedBottles >= 20 && collectedBottles < 30) {
    base_image.src = "img/tabasco_40.png";
  } else if (collectedBottles >= 30 && collectedBottles < 40) {
    base_image.src = "img/tabasco_60.png";
  } else if (collectedBottles >= 40 && collectedBottles < 50) {
    base_image.src = "img/tabasco_80.png";
  } else if (collectedBottles == 50) {
    base_image.src = "img/tabasco_100.png";
  }
  if (base_image.complete) {
    ctx.drawImage(
      base_image,
      0,
      0,
      base_image.width * 0.3,
      base_image.height * 0.3
    );
  }

  ctx.font = "20px Lexend Peta";
  ctx.fillText("x" + collectedBottles, 20, 60);
}

function draw_coinDisplay() {
  let base_image = new Image();

  if (collectedCoins >= 0 && collectedCoins < 10) {
    base_image.src = "img/coin_0.png";
  } else if (collectedCoins >= 10 && collectedCoins < 20) {
    base_image.src = "img/coin_20.png";
  } else if (collectedCoins >= 20 && collectedCoins < 30) {
    base_image.src = "img/coin_40.png";
  } else if (collectedCoins >= 30 && collectedCoins < 40) {
    base_image.src = "img/coin_60.png";
  } else if (collectedCoins >= 40 && collectedCoins < 50) {
    base_image.src = "img/coin_80.png";
  } else if (collectedCoins == 50) {
    base_image.src = "img/coin_100.png";
  }

  if (base_image.complete) {
    ctx.drawImage(
      base_image,
      200,
      0,
      base_image.width * 0.3,
      base_image.height * 0.3
    );
  }

  ctx.font = "20px Lexend Peta";
  ctx.fillText("x" + collectedCoins, 220, 60);
}

function draw_lifeDisplay() {
  let base_image = new Image();

  if (live_energy <= 100 && live_energy > 80) {
    base_image.src = "img/life_100.png";
  } else if (live_energy <= 80 && live_energy > 60) {
    base_image.src = "img/life_80.png";
  } else if (live_energy <= 60 && live_energy > 40) {
    base_image.src = "img/life_60.png";
  } else if (live_energy <= 40 && live_energy > 20) {
    base_image.src = "img/life_40.png";
  } else if (live_energy <= 20 && live_energy > 0) {
    base_image.src = "img/life_20.png";
  } else if (live_energy == 0) {
    base_image.src = "img/life_0.png";
  }
  if (base_image.complete) {
    ctx.drawImage(
      base_image,
      400,
      0,
      base_image.width * 0.3,
      base_image.height * 0.3
    );
  }

  ctx.font = "20px Lexend Peta ";
  ctx.fillText(live_energy + "%", 420, 60);
}

function drawBottles() {
  for (let i = 0; i < placedBottles.length; i++) {
    let bottle_x = placedBottles[i];
    addBackgroundObject("img/tabasco.png", bottle_x, 350, 0.5, 1);
  }
}

function drawCoins() {
  for (let i = 0; i < placedCoins_x.length; i++) {
    let coin_x = placedCoins_x[i];
    addBackgroundObject("img/coin_small.png", coin_x, 290, 0.4, 1);
  }
}

function drawLifes() {
  for (let i = 0; i < placedLifes_x.length; i++) {
    let life_x = placedLifes_x[i];
    addBackgroundObject("img/life_symbol.png", life_x, 290, 0.4, 1);
  }
}


function hurt(){

   let base_image = new Image();
  base_image.src = currentCharacterImage;

  
    base_image.src = currenthurtCharakterImage;

    setInterval(function () {
      let index = charakterHurtIndex % hurtCharakter.length;

      currenthurtCharakterImage = hurtCharakter[index];

      charakterHurtIndex = charakterHurtIndex + 1;

      if (charakterHurtIndex > 2) {
        charakterHurtIndex = 0;
      }
      
       },500);

      }




function dead(){

  let base_image = new Image();
  base_image.src = currentCharacterImage;

   
    base_image.src = currentdeadCharakterImage;

    setInterval(function () {
      let index = charakterDeadIndex % deadCharakter.length;

      currentdeadCharakterImage = deadCharakter[index];

      charakterDeadIndex = charakterDeadIndex + 1;
    }, 600);




}


function inactive(){

  let base_image = new Image();
  base_image.src = currentinactiveCharakterImage;

  setInterval(function () {
    let index = charakterInactiveIndex % inactiveCharakter.length;

    currentinactiveCharakterImage = inactiveCharakter[index];

    charakterInactiveIndex = charakterInactiveIndex + 1;
  }, 500);

}



function sleep(){
 
  let base_image = new Image();
  base_image.src = currentsleepCharakterImage;

  setInterval(function () {
    let index = charakterSleepIndex % sleepCharakter.length;

    currentsleepCharakterImage = sleepCharakter[index];

    charakterSleepIndex++;
  }, 500);

}


/**
 * This function change the pictures for the different situation from the figure
 */

function updateCharacter() {
  let base_image = new Image();
  base_image.src = currentCharacterImage;

  let timePassedSinceJump = new Date().getTime() - lastJumpStarted;

  if(isHurt == true){

  hurt();}

  else if(isDead == true){

   dead();

  } else if (isInactive == true) {
   
    inactive();

  } else if (isSleep == true) {
    
    sleep();


  } else if (timePassedSinceJump < JUMP_TIME) {
    character_y = character_y - 12.5;
  } else {
    // Check falling

    if (character_y < 135) {
      character_y = character_y + 2.5;

      base_image.src = currentJumpImage;
    }
  }

  if (base_image.complete) {
    ctx.drawImage(
      base_image,
      character_x,
      character_y,
      base_image.width * 0.25,
      base_image.height * 0.25
    );
  }
}


/**
 * This function draw the background from the game
 */

function drawBackground() {
  ctx.fillStyle = "white";

  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawGround();
}


/**
 * This function draw the ground in the game
 */

function drawGround() {
  if (start_screen == false && game_over == false) {
    if (isMovingRight) {
      bg_elements = bg_elements - GAME_SPEED;
    }

    if (isMovingLeft && bg_elements < 500) {
      bg_elements = bg_elements + GAME_SPEED;
    }
  }

  if (start_screen == true) {
    addBackgroundObject("img/start_screen.png", 0, 0, 0.45, 1);
  }

  if(game_over == true){
     addBackgroundObject("img/game_over.png", 0, 0, 0.45, 1);
     document.getElementById('restart-btn').classList.remove('d-none');


  }

  if (start_screen == false && game_over == false) {
    addBackgroundObject("img/background.png", 0, 0, 0.45, 1);

    addBackgroundObject("img/background.png", 1725, 0, 0.45, 1);

    addBackgroundObject("img/background.png", 3450, 0, 0.45, 1);

    addBackgroundObject("img/background.png", 5175, 0, 0.45, 1);

    addBackgroundObject("img/background.png", 6900, 0, 0.45, 1);

    addBackgroundObject("img/background.png", 8625, 0, 0.45, 1);

    addBackgroundObject("img/background.png", 10350, 0, 0.45, 1);

    addBackgroundObject("img/background.png", 12075, 0, 0.45, 1);
  }
}

function addBackgroundObject(src, offsetX, offsetY, scale, opacity) {
  if (opacity != undefined) {
    ctx.globalAlpha = opacity;
  }

  let base_image = new Image();
  base_image.src = src;
  if (base_image.complete) {
    ctx.drawImage(
      base_image,
      offsetX + bg_elements,
      offsetY,
      base_image.width * scale,
      base_image.height * scale
    );
  }
  ctx.globalAlpha = 1;
}


/**
 * This function show what tasks the different keys have
 */

function listenForKeys() {
  document.addEventListener("keydown", (e) => {
    const k = e.key;

    if (k == "ArrowRight") {
      isMovingRight = true;
    }

    if (k == "ArrowLeft") {
      isMovingLeft = true;
    }

    if (k == "d" && collectedBottles > 0) {
      isThrowing = true;
      let timePassed = new Date().getTime() - bottleThrowTime;

      if (timePassed > 1000) {
        AUDIO_THROW.play();

        collectedBottles--;
        bottleThrowTime = new Date().getTime();
      }
    }

    let timePassedSinceJump = new Date().getTime() - lastJumpStarted;

    if (e.code == "Space" && timePassedSinceJump > JUMP_TIME * 2) {
      isJumping = true;

      AUDIO_JUMP.play();

      lastJumpStarted = new Date().getTime();
    }
  });

  document.addEventListener("keyup", (e) => {
    const k = e.key;

    if (k == "ArrowRight") {
      isMovingRight = false;
    }

    if (k == "ArrowLeft") {
      isMovingLeft = false;
    }
  });
}
