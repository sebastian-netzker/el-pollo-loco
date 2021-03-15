

let touchpointX;
let Y_touchpoints = new Array();
let ongoingTouches = new Array();
let jumpOnMobile = false;
let clickTimer = null;

let characterWidth = 10;



/**
 * Script for detecting finger touch on mobile devices
 */

function startupMobileListeners() {
  document.addEventListener("touchstart", handleStart, false);
  document.addEventListener("touchend", handleEnd, false);
  document.addEventListener("touchmove", handleMove, false);
}

document.addEventListener("DOMContentLoaded", startupMobileListeners)

/**
 * Detect and handle touch-start on mobile; open fullscreen when user touch detected
 * @param {string} e - touch event
 */
function handleStart(e) {
  // document.documentElement.requestFullscreen();
  for (let i = 0; i < e.touches.length; i++) {
    if (e && window.innerWidth > 450) {
      touchpointX = e.touches[i].clientX;
      touchpointY = e.touches[i].clientY;
    } else {
      changeTouchpointRef(e, i);
    }
    moveOnMobile();
  }
}

/**
 * Change reference for x- and y-coordinates
 * @param {string} e - touch event
 * @param {number} i - index of touch-event
 */
function changeTouchpointRef(e, i) {
  // reference points for x and y-movement on canvas are flipped on small screens due to forced canvas rotation by 90deg
  // touchpoint-references need to be flipped in portrait-view
  touchpointX = e.touches[i].clientY;
  touchpointY = e.touches[i].clientX;
}

/**
 * Stop character-movement when touch ended
 */
function handleEnd() {
  isMovingLeft = false;
  isMovingRight = false;
}

/**
 * Detect and handle touch-move on mobile
 * @param {string} e - touch event
 */
function handleMove(e) {
  for (let i = 0; i < e.touches.length; i++) {
    let touchpointY = e.touches[i].pageY;
    Y_touchpoints.push(touchpointY);
  }
  checkForJump();
}

function checkForJump() {
  let heightDifference =
    Y_touchpoints[0] - Y_touchpoints[Y_touchpoints.length - 1];

  // trigger jump when touchmove exceeds 80px in y-direction and character isn't wounded
  if (heightDifference >= 50) {
    triggerJump();
  }
}
/**
 * Simulate keydown-event when jump is triggered on mobile
 */
function triggerJump() {
  document.dispatchEvent(
    new KeyboardEvent("keydown", {
      code: "Space",
    })
  );
}

/**
 * Move character on mobile by detection & localization of finger touch
 */
function moveOnMobile() {
  touchStart();
  let relativeCharacterPosition =
    (character_x + characterWidth / 2) / canvas.width; // relative character-position on canvas
  let absoluteCharacterPosition = relativeCharacterPosition * window.innerWidth; // absolute character-position on mobile screen in px
  detectMovingDirection(absoluteCharacterPosition);
}

/**
 * Detect moving direction of character depending on point of touch on screen
 * @param {number} absoluteCharacterPosition - x-position of character on current screen in px
 */
function detectMovingDirection(absoluteCharacterPosition) {
  if (touchpointX < absoluteCharacterPosition) {
    // move left if touch is placed left from character
    isMovingLeft = true;
  } else if (touchpointX >= absoluteCharacterPosition) {
    // move right if touch is placed right from character
    isMovingRight = true;
  }
}

/**
 * Detect time of touch-start to identify single & double-taps
 */
function touchStart() {
  if (clickTimer == null) {
    clickTimer = setTimeout(function () {
      clickTimer = null;
    }, 500);
  } else {
    detectDoubleTap();
  }
}

function detectDoubleTap() {
  clearTimeout(clickTimer);
  clickTimer = null;
  document.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "d",
    })
  );
}
