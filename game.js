

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

let character_y = 95;

let chickenyellow_x = 300;

let chickenyellow_y = 350;

let chickenbrown_x = 300;

let chickenbrown_y = 350;

let character_energy = 100;

let final_boss_energy = 100;

let isMovingRight = false;

let isMovingLeft = false;

let bg_elements = 0;

let lastJumpStarted = 0;

let currentCharacterImage = "img/charakter_walk_1.png";

let currentyellowChickenImage = "img/yellow_chicken_1.png";

let currentbrownChickenImage = "img/brown_chicken_1.png";

let characterGraphicsRight = [
  // "img/charakter_1.png",
  // "img/charakter_2.png",
  // "img/charakter_3.png",
  // "img/charakter_4.png",

  "img/charakter_walk_1.png",
  "img/charakter_walk_2.png",
  "img/charakter_walk_3.png",
  "img/charakter_walk_4.png",
  "img/charakter_walk_5.png",
  "img/charakter_walk_6.png",
];

//let characterGraphicsLeft = [
//  "img/charakter_left_1.png",
//  "img/charakter_left_2.png",
//  "img/charakter_left_3.png",
//  "img/charakter_left_4.png",
//];


let brownChicken = [
"img/brown_chicken_1.png",
"img/brown_chicken_2.png",
"img/brown_chicken_3.png",];


let yellowChicken = [
  "img/yellow_chicken_1.png",
  "img/yellow_chicken_2.png",
  "img/yellow_chicken_3.png",
];

let characterGraphicIndex = 0;

let cloudOffset = 0;

let chickens = [];

let placedBottles = [1000, 1700, 2500, 2800, 3000, 3300, 3700];

let collectedBottles = 50;

let bottleThrowTime = 0;

let thrownBottle_x = 0;

let thrownBottle_y = 0;

let bossDefeatedAt = 0;

let game_finished = false;

let character_lost_at = 0;

// -------------- Game config

let JUMP_TIME = 300; // in ms

let GAME_SPEED = 4;

let BOSS_POSITION = 5000;

let AUDIO_RUNNING = new Audio("audio/running.mp3");

let AUDIO_JUMP = new Audio("audio/jump.mp3");

let AUDIO_BOTTLE = new Audio("audio/bottle.mp3");

let AUDIO_THROW = new Audio("audio/throw.mp3");

let AUDIO_CHICKEN = new Audio("audio/chicken.mp3");

let AUDIO_GLASS = new Audio("audio/glass.mp3");

let AUDIO_BACKGROUND_MUSIC = new Audio("audio/music.mp3");

let AUDIO_WIN = new Audio("audio/win.mp3");

AUDIO_BACKGROUND_MUSIC.loop = true;

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

  //createChickenList();

  checkForRunning();

  yellowChicken_move();

  brownChicken_move();

  draw();

  calculateCloudOffset();

  listenForKeys();

  calculateChickenPosition();

  calculateChickenYellowPosition();

  calculateChickenBrownPosition();

  checkForCollision();
}

function checkForCollision() {
  setInterval(function () {
    // Check chicken

    for (let i = 0; i < chickens.length; i++) {
      let chicken = chickens[i];

      let chicken_x = chicken.position_x + bg_elements;

      if (chicken_x - 40 < character_x && chicken_x + 40 > character_x) {
        if (character_y > 210) {
          if(character_energy >0){
          character_energy -= 10;
        } else {
          character_lost_at = new Date().getTime();
          game_finished = true;
        }
        }
      }
    }

    // Check Bottle

    for (let i = 0; i < placedBottles.length; i++) {
      let bottle_x = placedBottles[i] + bg_elements;

      if (bottle_x - 40 < character_x && bottle_x + 40 > character_x) {
        if (character_y > 210) {
          placedBottles.splice(i, 1);
          AUDIO_BOTTLE.play();
          collectedBottles++;
        }
      }
    }

    // Check final boss
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

function finishLevel() {
  AUDIO_CHICKEN.play();

  setTimeout(function () {}, 500);

  game_finished = true;

  AUDIO_WIN.play();
}

function calculateChickenPosition() {
  setInterval(function () {
    for (let i = 0; i < chickens.length; i++) {
      let chicken = chickens[i];

      chicken.position_x = chicken.position_x - chicken.speed;
    }
  }, 50);
}

//function createChickenList() {
 // chickens = [
  //  createChicken(1, 700),
  //];
//}

function calculateCloudOffset() {
  setInterval(function () {
    cloudOffset = cloudOffset + 0.25;
  }, 50);
}




function yellowChicken_move(){

  setInterval(function () {

  

  let index = characterGraphicIndex % yellowChicken.length;

  currentChickenImage = yellowChicken[index];

  characterGraphicIndex = characterGraphicIndex +1;

},300);

}


function brownChicken_move() {
  setInterval(function () {
    let index = characterGraphicIndex % yellowChicken.length;

    currentChickenImage = brownChicken[index];

    characterGraphicIndex = characterGraphicIndex + 1;
  }, 300);
}


function yellowChicken_animated(){

  let base_image = new Image();
  base_image.src= currentyellowChickenImage;

  if(base_image.complete){

    ctx.drawImage(
      base_image,
      chickenyellow_x,
      chickenyellow_y,
      base_image.width * 0.25,
      base_image.height * 0.25
    );
  }
}


function brownChicken_animated() {
  let base_image = new Image();
  base_image.src = currentbrownChickenImage;

  if (base_image.complete) {
    ctx.drawImage(
      base_image,
      chickenbrown_x,
      chickenbrown_y,
      base_image.width * 0.25,
      base_image.height * 0.25
    );
  }
}


function calculateChickenYellowPosition() {
  setInterval(function () {
    for (let i = 0; i < yellowChicken.length; i++) {

      chickenyellow_x = chickenyellow_x - 5;
    }
  }, 400);
}

function calculateChickenBrownPosition() {
  setInterval(function () {
    for (let i = 0; i < yellowChicken.length; i++) {
      chickenbrown_x = chickenbrown_x - 5;
    }
  }, 400);
}




function checkForRunning() {
  setInterval(function () {
    if (isMovingRight) {
      AUDIO_RUNNING.play();

      let index = characterGraphicIndex % characterGraphicsRight.length;

      currentCharacterImage = characterGraphicsRight[index];

      characterGraphicIndex = characterGraphicIndex + 1;
    }

    if (isMovingLeft) {
      AUDIO_RUNNING.play();

      let index = characterGraphicIndex % characterGraphicsRight.length;

      currentCharacterImage = characterGraphicsLeft[index];

      characterGraphicIndex = characterGraphicIndex + 1;
    }

    if (!isMovingRight && !isMovingLeft) {
      AUDIO_RUNNING.pause();
    }
  }, 200);
}

function draw() {
  drawBackground();

   

  if (game_finished) {
    drawFinalScreen();

    // Draw success screen
  } else {
    updateCharacter();

    yellowChicken_animated();

    brownChicken_animated();

   // drawChicken();

    drawBottles();

    requestAnimationFrame(draw);

    drawEnergyBar();

    draw_tabascoDisplay();

     draw_lifeDisplay();

    drawThrowBottle();
  }
  drawFinalBoss();
}

function drawFinalScreen() {
  ctx.font = "30px Lexend Peta";

  let msg = "Level 1 is complete !";

   
 
  if(character_lost_at > 0){
    ctx.font = "50px Lexend Peta";
    

    msg = "You lost !"
     
  }
ctx.fillText(msg, 90, 230);
 
}

function drawFinalBoss() {
  let chicken_x = BOSS_POSITION;

  let chicken_y = 98;

  let bossImage = "img/chicken_big.png";

  if (bossDefeatedAt > 0) {
    let timePassed = new Date().getTime() - bossDefeatedAt;

    chicken_x = chicken_x + timePassed * 0.7;

    chicken_y = chicken_y - timePassed * 0.3;

    bossImage = "img/chicken_dead.png";
  }

  addBackgroundObject(bossImage, chicken_x, chicken_y, 0.45, 1);

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

    thrownBottle_x = 125 + timePassed * 0.7;

    thrownBottle_y = 300 - (timePassed * 0.6 - gravity);

    let base_image = new Image();
    base_image.src = "img/tabasco.png";
    if (base_image.complete) {
      ctx.drawImage(
        base_image,
        thrownBottle_x,
        thrownBottle_y,
        base_image.width * 0.5,
        base_image.height * 0.5
      );
    }
  }
}

function draw_tabascoDisplay() {
  let base_image = new Image();
  base_image.src = "img/tabasco.png";
  if (base_image.complete) {
    ctx.drawImage(
      base_image,
      0,
      0,
      base_image.width * 0.5,
      base_image.height * 0.5
    );
  }

  ctx.font = "20px Lexend Peta";

  ctx.fillText("x" + collectedBottles, 55, 50);
}


function draw_lifeDisplay() {
  let base_image = new Image();
  base_image.src = "img/life_100.png";
  if (base_image.complete) {
    ctx.drawImage(
      base_image,
      0,
      60,
      base_image.width * 0.3,
      base_image.height * 0.3
    );
  }


}

function drawBottles() {
  for (let i = 0; i < placedBottles.length; i++) {
    let bottle_x = placedBottles[i];
    addBackgroundObject("img/tabasco.png", bottle_x, 330, 0.5, 1);
  }
}

function drawEnergyBar() {
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = "blue";
  ctx.fillRect(500, 15, 2 * character_energy, 30);
  ctx.globalAlpha = 0.2;

  ctx.fillStyle = "black";
  ctx.fillRect(495, 10, 210, 40);
  ctx.globalAlpha = 1;
}

function drawChicken() {
  for (i = 0; i < chickens.length; i = i + 1) {
    let chicken = chickens[i];

    addBackgroundObject(
      chicken.img,
      chicken.position_x,
      chicken.position_y,
      chicken.scale,
      1
    );
  }
}

//function createChicken(type, position_x) {
//  return {
 //   img: "img/chicken_1_" + type + ".png",
  //  position_x: position_x,
  //  position_y: 290,
  //  scale: 0.5,
  //  speed: Math.random() * 5,
  //};
//}

function updateCharacter() {
  let base_image = new Image();
  base_image.src = currentCharacterImage;

  let timePassedSinceJump = new Date().getTime() - lastJumpStarted;

  if (timePassedSinceJump < JUMP_TIME) {
    character_y = character_y - 10;
  } else {
    // Check falling

    if (character_y < 105) {
      character_y = character_y + 5;
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

function drawBackground() {
  ctx.fillStyle = "white";

  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawGround();

  // Draw Clouds

 // addBackgroundObject("img/cloud1.png", 100 - cloudOffset, 20, 0.8, 1);

 // addBackgroundObject("img/cloud2.png", 500 - cloudOffset, 20, 0.6, 1);

 // addBackgroundObject("img/cloud1.png", 800 - cloudOffset, 20, 1, 1);

 // addBackgroundObject("img/cloud2.png", 1300 - cloudOffset, 20, 0.6, 1);

 // addBackgroundObject("img/cloud1.png", 1800 - cloudOffset, 20, 1, 1);

 // addBackgroundObject("img/cloud2.png", 2300 - cloudOffset, 20, 0.6, 1);

 // addBackgroundObject("img/cloud1.png", 2800 - cloudOffset, 20, 1, 1);

 // addBackgroundObject("img/cloud2.png", 3500 - cloudOffset, 20, 0.6, 1);

 // addBackgroundObject("img/cloud1.png", 3900 - cloudOffset, 20, 1, 1);

 // addBackgroundObject("img/cloud2.png", 4300 - cloudOffset, 20, 0.6, 1);

 // addBackgroundObject("img/cloud1.png", 4700 - cloudOffset, 20, 1, 1);

 // addBackgroundObject("img/cloud2.png", 5200 - cloudOffset, 20, 0.6, 1);
}

function drawGround() {
  if (isMovingRight) {
    bg_elements = bg_elements - GAME_SPEED;
  }

  if (isMovingLeft && bg_elements < 500) {
    bg_elements = bg_elements + GAME_SPEED;
  }


  addBackgroundObject("img/background.png", 0, 0, 0.4, 1);

  addBackgroundObject("img/background.png", 1535, 0, 0.4, 1);

  addBackgroundObject("img/background.png", 3070, 0, 0.4, 1);

  addBackgroundObject("img/background.png", 4605, 0, 0.4, 1);

  addBackgroundObject("img/background.png", 6140, 0, 0.4, 1);

  addBackgroundObject("img/background.png", 7675, 0, 0.4, 1);

  addBackgroundObject("img/background.png", 9210, 0, 0.4, 1);

  addBackgroundObject("img/background.png", 10745, 0, 0.4, 1);



 // addBackgroundObject("img/bg_elem_2.png", 450, 120, 0.6, 0.5);

 // addBackgroundObject("img/bg_elem_1.png", 700, 255, 0.4, 0.6);

 // addBackgroundObject("img/bg_elem_2.png", 1100, 260, 0.3, 0.2);

 // addBackgroundObject("img/bg_elem_1.png", 1400, 195, 0.6, 0.4);

 // addBackgroundObject("img/bg_elem_2.png", 1650, 120, 0.6, 0.5);

 // addBackgroundObject("img/bg_elem_1.png", 1850, 255, 0.4, 0.6);

 // addBackgroundObject("img/bg_elem_2.png", 2100, 260, 0.3, 0.2);

 // addBackgroundObject("img/bg_elem_1.png", 2400, 195, 0.6, 0.4);

 // addBackgroundObject("img/bg_elem_2.png", 2750, 120, 0.6, 0.5);

 // addBackgroundObject("img/bg_elem_1.png", 3050, 255, 0.4, 0.6);

 // addBackgroundObject("img/bg_elem_2.png", 3400, 260, 0.3, 0.2);

 // addBackgroundObject("img/bg_elem_1.png", 3900, 195, 0.6, 0.4);

 // addBackgroundObject("img/bg_elem_2.png", 4350, 120, 0.6, 0.5);

 // addBackgroundObject("img/bg_elem_1.png", 4650, 255, 0.4, 0.6);

 // addBackgroundObject("img/bg_elem_2.png", 5000, 260, 0.3, 0.2);

  // Draw Ground
  ctx.fillStyle = "#FFE699";

  ctx.fillRect(0, 375, canvas.width, canvas.height - 375);

  for (let i = 0; i < 35; i = i + 1) {
    addBackgroundObject("img/sand.png", i * canvas.width, 375, 0.36, 0.5);
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

function listenForKeys() {
  document.addEventListener("keydown", (e) => {
    const k = e.key;

    if (k == "ArrowRight") {
      isMovingRight = true;
      // character_x = character_x + 5;
    }

    if (k == "ArrowLeft") {
      isMovingLeft = true;
      // character_x = character_x - 5;
    }

    if (k == "d" && collectedBottles > 0) {
      let timePassed = new Date().getTime() - bottleThrowTime;

      if (timePassed > 1000) {
        AUDIO_THROW.play();

        collectedBottles--;
        bottleThrowTime = new Date().getTime();
      }
    }
    let timePassedSinceJump = new Date().getTime() - lastJumpStarted;

    if (e.code == "Space" && timePassedSinceJump > JUMP_TIME * 2) {
      AUDIO_JUMP.play();

      lastJumpStarted = new Date().getTime();
    }
  });

  document.addEventListener("keyup", (e) => {
    const k = e.key;

    if (k == "ArrowRight") {
      isMovingRight = false;
      //  character_x = character_x + 5;
    }

    if (k == "ArrowLeft") {
      isMovingLeft = false;
      //   character_x = character_x - 5;
    }

    //  if (e.code == "Space") {
    //   isJumping = false;
    // }
  });
}
