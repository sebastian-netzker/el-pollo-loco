let imagePaths = [
  "./img/tabasco_broken_1.png",
  "./img/tabasco_broken_2.png",
  "./img/tabasco_broken_3.png",
  "./img/tabasco_broken_4.png",
  "./img/tabasco_broken_5.png",
  "./img/tabasco_broken_6.png",

  "./img/tabasco_rotate_1.png",
  "./img/tabasco_rotate_2.png",
  "./img/tabasco_rotate_3.png",
  "./img/tabasco_rotate_4.png",

  "./img/tabasco_0.png",
  "./img/tabasco_20.png",
  "./img/tabasco_40.png",
  "./img/tabasco_60.png",
  "./img/tabasco_80.png",
  "./img/tabasco_100.png",

  "./img/tabasco.png",

  "./img/coin_0.png",
  "./img/coin_20.png",
  "./img/coin_40.png",
  "./img/coin_60.png",
  "./img/coin_80.png",
  "./img/coin_100.png",

  "./img/coin_big.png",
  "./img/coin_small.png",

  "./img/life_0.png",
  "./img/life_20.png",
  "./img/life_40.png",
  "./img/life_60.png",
  "./img/life_80.png",
  "./img/life_100.png",

  "./img/charakter/charakter_hurt_1.png",
  "./img/charakter/charakter_hurt_2.png",
  "./img/charakter/charakter_hurt_3.png",

  "./img/charakter/charakter_inactive_1.png",
  "./img/charakter/charakter_inactive_2.png",
  "./img/charakter/charakter_inactive_3.png",
  "./img/charakter/charakter_inactive_4.png",
  "./img/charakter/charakter_inactive_5.png",
  "./img/charakter/charakter_inactive_6.png",
  "./img/charakter/charakter_inactive_7.png",
  "./img/charakter/charakter_inactive_8.png",
  "./img/charakter/charakter_inactive_9.png",
  "./img/charakter/charakter_inactive_10.png",

  "./img/charakter/charakter_jump_1.png",
  "./img/charakter/charakter_jump_2.png",
  "./img/charakter/charakter_jump_3.png",
  "./img/charakter/charakter_jump_4.png",
  "./img/charakter/charakter_jump_5.png",
  "./img/charakter/charakter_jump_6.png",
  "./img/charakter/charakter_jump_7.png",
  "./img/charakter/charakter_jump_8.png",
  "./img/charakter/charakter_jump_9.png",

  "./img/charakter/charakter_sleep_1.png",
  "./img/charakter/charakter_sleep_2.png",
  "./img/charakter/charakter_sleep_3.png",
  "./img/charakter/charakter_sleep_4.png",
  "./img/charakter/charakter_sleep_5.png",
  "./img/charakter/charakter_sleep_6.png",
  "./img/charakter/charakter_sleep_7.png",
  "./img/charakter/charakter_sleep_8.png",
  "./img/charakter/charakter_sleep_9.png",
  "./img/charakter/charakter_sleep_10.png",

  "./img/charakter/charakter_walkleft_1.png",
  "./img/charakter/charakter_walkleft_2.png",
  "./img/charakter/charakter_walkleft_3.png",
  "./img/charakter/charakter_walkleft_4.png",
  "./img/charakter/charakter_walkleft_5.png",
  "./img/charakter/charakter_walkleft_6.png",

  "./img/charakter/charakter_walkright_1.png",
  "./img/charakter/charakter_walkright_2.png",
  "./img/charakter/charakter_walkright_3.png",
  "./img/charakter/charakter_walkright_4.png",
  "./img/charakter/charakter_walkright_5.png",
  "./img/charakter/charakter_walkright_6.png",

  "./img/chicken_boss/chicken_boss_caution/chicken_boss_caution_1.png",
  "./img/chicken_boss/chicken_boss_caution/chicken_boss_caution_2.png",
  "./img/chicken_boss/chicken_boss_caution/chicken_boss_caution_3.png",
  "./img/chicken_boss/chicken_boss_caution/chicken_boss_caution_4.png",
  "./img/chicken_boss/chicken_boss_caution/chicken_boss_caution_5.png",
  "./img/chicken_boss/chicken_boss_caution/chicken_boss_caution_6.png",
  "./img/chicken_boss/chicken_boss_caution/chicken_boss_caution_7.png",
  "./img/chicken_boss/chicken_boss_caution/chicken_boss_caution_8.png",

  "./img/chicken_boss/chicken_boss_dead/chickenboss_dead_1.png",
  "./img/chicken_boss/chicken_boss_dead/chickenboss_dead_2.png",
  "./img/chicken_boss/chicken_boss_dead/chickenboss_dead_3.png",

  "./img/chicken_boss/chicken_boss_hurt/chickenboss_hurt_1.png",
  "./img/chicken_boss/chicken_boss_hurt/chickenboss_hurt_2.png",
  "./img/chicken_boss/chicken_boss_hurt/chickenboss_hurt_3.png",

  "./img/chicken_boss/chicken_boss_walk/chicken_boss_walk_1.png",
  "./img/chicken_boss/chicken_boss_walk/chicken_boss_walk_2.png",
  "./img/chicken_boss/chicken_boss_walk/chicken_boss_walk_3.png",
  "./img/chicken_boss/chicken_boss_walk/chicken_boss_walk_4.png",

  "./img/chicken_boss/chicken_boss_life/lifeBoss_0.png",
  "./img/chicken_boss/chicken_boss_life/lifeBoss_20.png",
  "./img/chicken_boss/chicken_boss_life/lifeBoss_40.png",
  "./img/chicken_boss/chicken_boss_life/lifeBoss_60.png",
  "./img/chicken_boss/chicken_boss_life/lifeBoss_80.png",
  "./img/chicken_boss/chicken_boss_life/lifeBoss_100.png",

  "./img/chicken/brown_chicken_1.png",
  "./img/chicken/brown_chicken_2.png",
  "./img/chicken/brown_chicken_3.png",
  "./img/chicken/chicken_dead_brown.png",

  "./img/chicken/yellow_chicken_1.png",
  "./img/chicken/yellow_chicken_2.png",
  "./img/chicken/yellow_chicken_3.png",
  "./img/chicken/chicken_dead_yellow.png",
];

let imageCharacter = [
  "./img/charakter/charakter_walkright_1.png",
  "./img/charakter/charakter_walkright_2.png",
  "./img/charakter/charakter_walkright_3.png",
  "./img/charakter/charakter_walkright_4.png",
  "./img/charakter/charakter_walkright_5.png",
  "./img/charakter/charakter_walkright_6.png",
];


/**

* Preload all images. This function should be executed before starting the game.
* imagePaths should contain all images that will be loaded: ['img/image1.png', 'img/image2.png', 'img/image3.png', ...]

*/
function preloadImages() {
  for (let i = 0; i < imagePaths.length; i++) {
    let image = new Image();

    image.src = imagePaths[i];

    images.push(image); // push image-path to images-array (which contains all image-paths)
  }
}




/**
 * This funtion initialize all function which are of importance for the game
 */
function init() {
  preloadImages();


  console.log(character_x);

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
          isHurt = true;

          if (charakterHurtIndex > 2) {
            isHurt = false;
          }
        }

        if (live_energy < 0) {
          liveEnergy_zero();
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
          isHurt = true;
        }
        if (charakterHurtIndex > 2) {
          isHurt = false;
        }

        if (live_energy < 0) {
          liveEnergy_zero();
        }
      }
    }
  }, 100);
}

/**
 * This function show that the live energy is zero
 */
function liveEnergy_zero() {
  live_energy = 0;
  game_over = true;
  isHurt = false;
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
        AUDIO_HEART.play();

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
        AUDIO_COIN.play();
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
        finalBossenergy_decrease();
      } else if (bossDefeatedAt == 0) {
        finalBoss_dead();
      }
    }
  }, 100);
}

/**
 * This function decrease the energy from the final boss
 */
function finalBossenergy_decrease() {
  final_boss_energy = final_boss_energy - 2;

  isBossHurt = true;

  isBossCaution = false;

  setInterval(function () {
    isBossHurt = false;
    isBossCaution = true;
  }, 2000);

  AUDIO_GLASS.play();
}

/**
 * This function activate the dead animation from the final boss
 */
function finalBoss_dead() {
  bossDefeatedAt = new Date().getTime();

  isBossCaution = false;
  isBossDead = true;

  setTimeout(function () {
    finishLevel();
  }, 1000);
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

/**
 * This function show the finish level animation
 */
function finishLevel() {
  AUDIO_CHICKEN.play();

  setTimeout(function () {}, 500);

  game_finished = true;

  AUDIO_WIN.play();
}

/**
 * This function create yellow chickens
 */
function createChicken_Yellow() {
  for (let i = 800; i < 8000; i = i + 800) {
    chickens_1.push({
      chickenyellow_x: i,
      chickenyellow_y: 370,
      currentyellowChickenImage: "img/yellow_chicken_1.png",
      current_yellowchicken_index: 0,
      speed: 20 + Math.random() * 30,
    });
  }
}

/**
 * This function create brown chickens
 */
function createChicken_Brown() {
  for (let i = 1000; i < 8000; i = i + 900) {
    chickens_2.push({
      chickenbrown_x: i,
      chickenbrown_y: 360,
      currentbrownChickenImage: "img/brown_chicken_1.png",
      current_brownchicken_index: 0,
      speed: 15 + Math.random() * 30,
    });
  }
}

/**
 * This function create new chickens
 */
function create_newChicken() {
  createChicken_Yellow();
  createChicken_Brown();
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
 * This function show the caution animation from the boss
 */
function bossCaution() {
  let index = cautionBossIndex % cautionBoss.length;
  currentBossCautionImage = cautionBoss[index];
  cautionBossIndex = cautionBossIndex + 1;
}

/**
 * This function show the hurt animation from the boss
 */
function bossHurt() {
  let index = hurtBossIndex % hurtBoss.length;
  currentBossHurtImage = hurtBoss[index];
  hurtBossIndex = hurtBossIndex + 1;
}

/**
 * This function show the dead animation from the boss
 */
function bossDead() {
  let index = deadBossIndex % deadBoss.length;
  currentBossDeadImage = deadBoss[index];
  deadBossIndex = deadBossIndex + 1;
}

/**
 * This function change the picture for the boss chicken so that it moves
 */
function bossChicken_move() {
  setInterval(function () {
    if (isBossCaution == true) {
      bossCaution();
    } else if (isBossHurt == true) {
      bossHurt();
    } else if (isBossDead == true) {
      bossDead();
    }
  }, 400);
}

/**
 * This function draw the base image for the yellow chicken
 * @param {image} base_image 
 */
function baseImage_yellowChicken(base_image){

  ctx.drawImage(
    base_image,
    chickens_1[i].chickenyellow_x,
    chickens_1[i].chickenyellow_y,
    base_image.width * 0.25,
    base_image.height * 0.25
  );
}


/**
 * This function draw the yellow chickens
 */
function yellowChicken_animated() {
  let base_image = new Image();
  base_image.src = currentyellowChickenImage;

  if (base_image.complete) {
    for (i = 0; i < chickens_1.length; i++) {
     baseImage_yellowChicken(base_image);
    }
  }
}

/**
 * This function draw the base image for the brown chicken
 * @param {image} base_image 
 */
function baseImage_brownChicken(base_image){

   ctx.drawImage(
     base_image,
     chickens_2[i].chickenbrown_x,
     chickens_2[i].chickenbrown_y,
     base_image.width * 0.25,
     base_image.height * 0.25
   );

}

/**
 * This function draw the brown chickens
 */
function brownChicken_animated() {
  let base_image = new Image();
  base_image.src = currentbrownChickenImage;

  if (brownChickenDead == true) {
    base_image.src = IMG30;
  }

  if (base_image.complete) {
    for (i = 0; i < chickens_2.length; i++) {
     baseImage_brownChicken(base_image);
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
 * This function activate the rotate bottle animation
 */
function moveBottle() {
  setInterval(function () {
    if (isThrowing) {
      let index = rotateBottleIndex % rotateBottle.length;

      currentrotateBottleImage = rotateBottle[index];

      rotateBottleIndex = rotateBottleIndex + 1;
    }
  }, 100);
}

/**
 * This function activate the jump animation from the character
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
 * This function activate the moving right animation from the character
 */
function movingRight() {
  AUDIO_RUNNING.play();

  isInactive = false;

  let index = characterGraphicIndex % characterGraphicsRight.length;

  currentCharacterImage = characterGraphicsRight[index];

  characterGraphicIndex = characterGraphicIndex + 1;
}

/**
 * This function activate the moving left animation from the character
 */
function movingLeft() {
  AUDIO_RUNNING.play();

  isInactive = false;

  let index = characterGraphicIndex % characterGraphicsLeft.length;

  currentCharacterImage = characterGraphicsLeft[index];

  characterGraphicIndex = characterGraphicIndex + 1;
}

/**
 * This function checks whether the figure is running or not
 */
function checkForRunning() {
  setInterval(function () {
    if (isMovingRight) {
      movingRight();
    }

    if (isMovingLeft) {
      movingLeft();
    }

    if (isHurt) {
      hurt();

      setTimeout(function () {
        isHurt = false;
      }, 1500);
    }

    if (!isMovingRight && !isMovingLeft) {
      AUDIO_RUNNING.pause();
    }
  }, 100);
}

/**
 * This function draw all elements in the game
 */
function draw() {
  drawBackground();

  if (game_finished) {
    drawFinalScreen();
  } else {
    if (!start_screen && !game_over) {
      updateCharacter();

      yellowChicken_animated();

      brownChicken_animated();

      drawBottles();

      drawCoins();

      drawLifes();

      draw_tabascoDisplay();

      draw_lifeDisplay();

      draw_coinDisplay();

      draw_bosslifeDisplay();

      drawEndbossdistance();

      drawThrowBottle();
    }

    requestAnimationFrame(draw);
  }
  drawFinalBoss();
}

/**
 * This function draw the final screen when the game is won
 */
function drawFinalScreen() {
  ctx.font = "60px Lexend Peta";
  ctx.fillText("You Win !", 250, 275);
}



/**
 * This function draw the boss chicken
 */
function drawFinalBoss() {
  let chicken_x = BOSS_POSITION;

  let chicken_y = 160;

  let bossImage;

  if (bossDefeatedAt > 0) {
   let timePassed = new Date().getTime() - bossDefeatedAt;

   chicken_x = chicken_x + timePassed * 0.7;

   chicken_y = chicken_y - timePassed * 0.3;
  }

  if (isBossCaution) {
    bossImage = currentBossCautionImage;
  }

  if (isBossHurt) {
    bossImage = currentBossHurtImage;
  }

  if (isBossDead) {
    bossImage = currentBossDeadImage;
  }

  addBackgroundObject(bossImage, chicken_x, chicken_y, 0.23, 1);
}

/**
 * This function draw the base image for the bottle
 * @param {image} base_image
 */
function baseImage_Bottle(base_image) {
  ctx.drawImage(
    base_image,
    thrownBottle_x,
    thrownBottle_y,
    base_image.width * 0.25,
    base_image.height * 0.25
  );
}

/**
 * This function make the throwing ability for the tabasco bottle
 */
function drawThrowBottle() {
  if (bottleThrowTime) {
    let timePassed = new Date().getTime() - bottleThrowTime;
    let gravity = Math.pow(9.81, timePassed / 300);

    thrownBottle_x = 150 + timePassed * 0.3;

    thrownBottle_y = 300 - (timePassed * 0.6 - gravity);

    let base_image = new Image();
    base_image.src = currentrotateBottleImage;

    if (base_image.complete) {
      baseImage_Bottle(base_image);
    }
  }
}

/**
 * This function draw the base image for the tabasco display
 * @param {image} base_image
 */
function baseImage_tabascoDisplay(base_image) {
  ctx.drawImage(
    base_image,
    0,
    0,
    base_image.width * 0.3,
    base_image.height * 0.3
  );
}

/**
 * This function draw the tabascodisplay at the top of the page
 */
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
    baseImage_tabascoDisplay(base_image);
  }

  ctx.font = "20px Lexend Peta";
  ctx.fillText("x" + collectedBottles, 20, 60);
}

/**
 * This function draw the base image for the coin display
 * @param {image} base_image
 */
function baseImage_coinDisplay(base_image) {
  ctx.drawImage(
    base_image,
    200,
    0,
    base_image.width * 0.3,
    base_image.height * 0.3
  );
}

/**
 * This function draw the coindisplay at the top of the page
 */
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
    baseImage_coinDisplay(base_image);
  }

  ctx.font = "20px Lexend Peta";
  ctx.fillText("x" + collectedCoins, 220, 60);
}

/**
 * This function draw the base image for the life display
 * @param {image} base_image
 */
function baseImage_lifeDisplay(base_image) {
  ctx.drawImage(
    base_image,
    400,
    0,
    base_image.width * 0.3,
    base_image.height * 0.3
  );
}

/**
 * This function draw the lifedisplay at the top of the page
 */
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
    baseImage_lifeDisplay(base_image);
  }

  ctx.font = "20px Lexend Peta ";
  ctx.fillText(live_energy + "%", 420, 60);
}

/**
 * This function draw the base image for the boss life display
 * @param {image} base_image
 */
function baseImage_bosslifeDisplay(base_image) {
  ctx.drawImage(
    base_image,
    615,
    40,
    base_image.width * 0.25,
    base_image.height * 0.25
  );
}

/**
 * This function draw the bosslife display
 */
function draw_bosslifeDisplay() {
  let base_image = new Image();

  if (final_boss_energy <= 100 && final_boss_energy > 80) {
    base_image.src = IMGS.chicken_boss.life[5];
  } else if (final_boss_energy <= 80 && final_boss_energy > 60) {
    base_image.src = IMGS.chicken_boss.life[4];
  } else if (final_boss_energy <= 60 && final_boss_energy > 40) {
    base_image.src = IMGS.chicken_boss.life[3];
  } else if (final_boss_energy <= 40 && final_boss_energy > 20) {
    base_image.src = IMGS.chicken_boss.life[2];
  } else if (final_boss_energy <= 20 && final_boss_energy > 0) {
    base_image.src = IMGS.chicken_boss.life[1];
  } else if (final_boss_energy == 0) {
    base_image.src = IMGS.chicken_boss.life[0];
  }

  if (base_image.complete) {
    baseImage_bosslifeDisplay(base_image);
  }

  ctx.fillText(final_boss_energy + "%", 770, 70);
}

/**
 * This function draw the distance between figure and end boss
 */
function drawEndbossdistance() {
  ctx.font = "18px Lexend Peta ";
  ctx.fillText("Endboss: " + (BOSS_POSITION + bg_elements) + "m", 620, 40);
}

/**
 * This function draw the bottles, which the figure can collect
 */
function drawBottles() {
  for (let i = 0; i < placedBottles.length; i++) {
    let bottle_x = placedBottles[i];
    addBackgroundObject("img/tabasco.png", bottle_x, 340, 0.25, 1);
  }
}

/**
 * This function draw the coins, which the figure can collect
 */
function drawCoins() {
  for (let i = 0; i < placedCoins_x.length; i++) {
    let coin_x = placedCoins_x[i];
    addBackgroundObject("img/coin_small.png", coin_x, 290, 0.4, 1);
  }
}

/**
 * This function draw the lifes, which the figure can collect
 */
function drawLifes() {
  for (let i = 0; i < placedLifes_x.length; i++) {
    let life_x = placedLifes_x[i];
    addBackgroundObject("img/life_symbol.png", life_x, 290, 0.4, 1);
  }
}

/**
 * This function change the picture when the figure is hurting
 */
function hurt() {
  let index = charakterHurtIndex % hurtCharakter.length;

  currenthurtCharakterImage = hurtCharakter[index];

  charakterHurtIndex = charakterHurtIndex + 1;

  if (charakterHurtIndex > 2) {
    charakterHurtIndex = 0;
  }
}

/**
 * This function change the picture when the figure is inactive
 */
function inactive() {
  let index = charakterInactiveIndex % inactiveCharakter.length;

  currentinactiveCharakterImage = inactiveCharakter[index];

  charakterInactiveIndex = charakterInactiveIndex + 1;
}

/**
 * This function draw the base image for the update character function
 * @param {image} base_image
 */
function baseImage_updateCharacter(base_image) {
  ctx.drawImage(
    base_image,
    character_x,
    character_y,
    base_image.width * 0.25,
    base_image.height * 0.25
  );
}

/**
 * This function change the pictures for the different situation from the figure
 */
function updateCharacter() {
  let base_image = new Image();
  base_image.src = currentCharacterImage;

  let timePassedSinceJump = new Date().getTime() - lastJumpStarted;

  if (isHurt == true) {
    base_image.src = currenthurtCharakterImage;
  } else if (isInactive == true) {
    base_image.src = currentinactiveCharakterImage;
  } else if (timePassedSinceJump < JUMP_TIME) {
    character_y = character_y - 12.5;
  } else {
    // Check falling

    if (character_y < 135) {
      character_y = character_y + 4;

      base_image.src = currentJumpImage;
    }
  }

  if (base_image.complete) {
    baseImage_updateCharacter(base_image);
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
 * This function start the game over animation if the fullscreen mode is not activate
 */
function gameOver_notFullscreen() {
  addBackgroundObject("img/game_over.png", -bg_elements, 0, 0.45, 1);
  document.getElementById("restart-btn").classList.remove("d-none");
  AUDIO_GAME_OVER.play();
}

/**
 * This function start the game over animation if the fullscreen mode is activate
 */
function gameOver_Fullscreen() {
  addBackgroundObject("img/game_over.png", -bg_elements, -100, 0.67, 1);
  document.getElementById("restart-btn").classList.remove("d-none");
  AUDIO_GAME_OVER.play();
}

/**
 * This function draw the ground in the game
 */
function drawGround() {
  if (!start_screen && !game_over) {
    if (isMovingRight) {
      bg_elements = bg_elements - GAME_SPEED;
    }

    if (isMovingLeft && bg_elements < 500) {
      bg_elements = bg_elements + GAME_SPEED;
    }
  }

  if (start_screen && !fullscreen) {
    addBackgroundObject("img/start_screen.png", -bg_elements, 0, 0.45, 1);
  }

  if (start_screen && fullscreen) {
    addBackgroundObject("img/start_screen.png", -bg_elements, 0, 0.65, 1);
  }

  if (game_over && !fullscreen) {
    gameOver_notFullscreen();
  }

  if (game_over && fullscreen) {
    gameOver_Fullscreen();
  }

  if (!start_screen && !game_over) {
    addBackground();
  }
}

/**
 * This function add the background picture
 */
function addBackground() {
  addBackgroundObject("img/background.png", -1725, 0, 0.45, 1);

  addBackgroundObject("img/background.png", 0, 0, 0.45, 1);

  addBackgroundObject("img/background.png", 1725, 0, 0.45, 1);

  addBackgroundObject("img/background.png", 3450, 0, 0.45, 1);

  addBackgroundObject("img/background.png", 5175, 0, 0.45, 1);

  addBackgroundObject("img/background.png", 6900, 0, 0.45, 1);

  addBackgroundObject("img/background.png", 8625, 0, 0.45, 1);

  addBackgroundObject("img/background.png", 10350, 0, 0.45, 1);

  addBackgroundObject("img/background.png", 12075, 0, 0.45, 1);

  addBackgroundObject("img/background.png", 13800, 0, 0.45, 1);
}

/**
 * This function draw the base image for the add background object function
 * @param {image} base_image
 */
function baseImage_addBackgroundObject(base_image, offsetX, offsetY, scale) {
  ctx.drawImage(
    base_image,
    offsetX + bg_elements,
    offsetY,
    base_image.width * scale,
    base_image.height * scale
  );
}

/**
 * This function can draw different background objects
 * @param {string} src - This string show you the source from the picture
 * @param {number} offsetX  - This number placed the picture on the x axis
 * @param {number} offsetY - This number placed the picture on the y axis
 * @param {number} scale - This number increase or decrase the picture
 * @param {number} opacity - This number show the opacity from the picture
 */
function addBackgroundObject(src, offsetX, offsetY, scale, opacity) {
  if (opacity != undefined) {
    ctx.globalAlpha = opacity;
  }

  let base_image = new Image();
  base_image.src = src;
  if (base_image.complete) {
    baseImage_addBackgroundObject(base_image, offsetX, offsetY, scale);
  }
  ctx.globalAlpha = 1;
}

/**
 * This function collected bottles, when the right key is pressed
 */
function keydownCollectedBottles() {
  isThrowing = true;
  let timePassed = new Date().getTime() - bottleThrowTime;

  if (timePassed > 1000) {
    AUDIO_THROW.play();

    collectedBottles--;
    bottleThrowTime = new Date().getTime();
  }
}

/**
 * This function activate the jump, when the right key is pressed
 */
function keydownJump() {
  isJumping = true;

  AUDIO_JUMP.play();

  lastJumpStarted = new Date().getTime();
}

/**
 * This function is activate when the key is pressed
 */
function keydown() {
  document.addEventListener("keydown", (e) => {
    const k = e.key;

    if (k == "ArrowRight") {
      isMovingRight = true;
    }

    if (k == "ArrowLeft") {
      isMovingLeft = true;
    }

    if (k == "d" && collectedBottles > 0) {
      keydownCollectedBottles();
    }

    let timePassedSinceJump = new Date().getTime() - lastJumpStarted;

    if (e.code == "Space" && timePassedSinceJump > JUMP_TIME * 5) {
      keydownJump();
    }
  });
}

/**
 * This funtion is activate when the key is released
 */
function keyup() {
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

/**
 * This function show what tasks the different keys have
 */
function listenForKeys() {
  startupMobileListeners();

  keydown();

  keyup();
}