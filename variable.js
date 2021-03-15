let images = []

let canvas;

let canvasWidth;

let ctx;





let bg_elements = 0;

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

let directionRight = true;

let directionLeft = false;

let isMovingLeft = false;

let isJumping = false;

let isJumping_left = false;

let isThrowing = false;

let isHurt = false;

let isHurt_left = false;

let isSleep = false;

let isSleep_left = false;

let stopInactive = false;

let stopInactive_Sleeping = false;

let lastKeyPressed = 0;


let isBossWalk = true;

let isBossHurt = false;

let isBossDead = false;

let isBossCaution = false;

let isBossAttack = false;

let brownChickenDead;

let yellowChickenDead;

let isInactive = false;

let isInactive_left = false;



let lastJumpStarted = 0;



let characterGraphicIndex = 0;

let characterJumpIndex = 0;

let characterJumpIndex_left = 0;

let yellowChickenGraphicIndex = 0;

let brownChickenGraphicIndex = 0;

let bossChickenGraphicIndex = 0;

let rotateBottleIndex = 0;

let brokeBottleIndex = 0;

let charakterHurtIndex = 0;

let charakterHurtIndex_left = 0;

let charakterDeadIndex = 0;

let charakterInactiveIndex = 0;

let charakterInactiveIndex_left = 0;

let charakterSleepIndex = 0;

let charakterSleepIndex_left = 0;

let hurtBossIndex = 0;

let walkBossIndex = 0;

let cautionBossIndex = 0;

let deadBossIndex = 0;

let attackBossIndex = 0;

let chickens_1 = [];

let chickens_2 = [];

let placedBottles = [
  1000,
  1500,
  3000,
  3500,
  5000,
  5500,
  7000,
  7500,
  9000,
  9500,
  10000,
  10500,
  12000,
];

let placedCoins_x = [
  500,
  1000,
  2500,
  3000,
  4500,
  5000,
  6500,
  7000,
  8500,
  9000,
  9500,
  10000,
  11500,
];

let placedLifes_x = [
  500,
  1500,
  2000,
  3500,
  4000,
  5500,
  6000,
  7500,
  8000,
  9500,
  10000,
  10500,
  11000,
  11500,
];

let placedCoins_y = [];

let collectedBottles = 0;

let collectedCoins = 0;

let bottleThrowTime = 0;

let thrownBottle_x = 0;

let thrownBottle_y = 0;

let bossDefeatedAt = 0;

let game_finished = false;

let character_lost_at = 0;


