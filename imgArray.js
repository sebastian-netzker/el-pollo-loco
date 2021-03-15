
const IMGS = {
  tabasco: {
    broken: [
      "./img/tabasco_broken_1.png",
      "./img/tabasco_broken_2.png",
      "./img/tabasco_broken_3.png",
      "./img/tabasco_broken_4.png",
      "./img/tabasco_broken_5.png",
      "./img/tabasco_broken_6.png",
    ],

    rotate: [
      "./img/tabasco_rotate_1.png",
      "./img/tabasco_rotate_2.png",
      "./img/tabasco_rotate_3.png",
      "./img/tabasco_rotate_4.png",
    ],

    display: [
      "./img/tabasco_0.png",
      "./img/tabasco_20.png",
      "./img/tabasco_40.png",
      "./img/tabasco_60.png",
      "./img/tabasco_80.png",
      "./img/tabasco_100.png",
    ],

    normal: ["./img/tabasco.png"],
  },

  coin: {
    display: [
      "./img/coin_0.png",
      "./img/coin_20.png",
      "./img/coin_40.png",
      "./img/coin_60.png",
      "./img/coin_80.png",
      "./img/coin_100.png",
    ],

    size: ["./img/coin_big.png", "./img/coin_small.png"],
  },

  life: {
    display: [
      "./img/life_0.png",
      "./img/life_20.png",
      "./img/life_40.png",
      "./img/life_60.png",
      "./img/life_80.png",
      "./img/life_100.png",
    ],

    normal: ["./img/start_screen.png"],
  },

  canvas: [
    "./img/game_over.png",
    "./img/start_screen.png",
    "./img/background.png",
  ],

  charakter: {
    dead: [
      "./img/charakter/charakter_dead_1.png",
      "./img/charakter/charakter_dead_2.png",
      "./img/charakter/charakter_dead_3.png",
      "./img/charakter/charakter_dead_4.png",
      "./img/charakter/charakter_dead_5.png",
      "./img/charakter/charakter_dead_6.png",
      "./img/charakter/charakter_dead_7.png",
    ],

    hurt: [
      "./img/charakter/charakter_hurt_1.png",
      "./img/charakter/charakter_hurt_2.png",
      "./img/charakter/charakter_hurt_3.png",
    ],

    hurt_left: [
      "./img/charakter/charakter_hurt_1_left.png",
      "./img/charakter/charakter_hurt_2_left.png",
      "./img/charakter/charakter_hurt_3_left.png",
    ],

    inactive: [
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
    ],

    inactive_left: [
      "./img/charakter/charakter_inactive_1_left.png",
      "./img/charakter/charakter_inactive_2_left.png",
      "./img/charakter/charakter_inactive_3_left.png",
      "./img/charakter/charakter_inactive_4_left.png",
      "./img/charakter/charakter_inactive_5_left.png",
      "./img/charakter/charakter_inactive_6_left.png",
      "./img/charakter/charakter_inactive_7_left.png",
      "./img/charakter/charakter_inactive_8_left.png",
      "./img/charakter/charakter_inactive_9_left.png",
      "./img/charakter/charakter_inactive_10_left.png",
    ],

    jump: [
      "./img/charakter/charakter_jump_1.png",
      "./img/charakter/charakter_jump_2.png",
      "./img/charakter/charakter_jump_3.png",
      "./img/charakter/charakter_jump_4.png",
      "./img/charakter/charakter_jump_5.png",
      "./img/charakter/charakter_jump_6.png",
      "./img/charakter/charakter_jump_7.png",
      "./img/charakter/charakter_jump_8.png",
      "./img/charakter/charakter_jump_9.png",
    ],

    jump_left: [
      "./img/charakter/charakter_jump_1_left.png",
      "./img/charakter/charakter_jump_2_left.png",
      "./img/charakter/charakter_jump_3_left.png",
      "./img/charakter/charakter_jump_4_left.png",
      "./img/charakter/charakter_jump_5_left.png",
      "./img/charakter/charakter_jump_6_left.png",
      "./img/charakter/charakter_jump_7_left.png",
      "./img/charakter/charakter_jump_8_left.png",
      "./img/charakter/charakter_jump_9_left.png",
    ],

    sleep: [
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
    ],

    sleep_left: [
      "./img/charakter/charakter_sleep_1_left.png",
      "./img/charakter/charakter_sleep_2_left.png",
      "./img/charakter/charakter_sleep_3_left.png",
      "./img/charakter/charakter_sleep_4_left.png",
      "./img/charakter/charakter_sleep_5_left.png",
      "./img/charakter/charakter_sleep_6_left.png",
      "./img/charakter/charakter_sleep_7_left.png",
      "./img/charakter/charakter_sleep_8_left.png",
      "./img/charakter/charakter_sleep_9_left.png",
      "./img/charakter/charakter_sleep_10_left.png",
    ],

    left: [
      "./img/charakter/charakter_walkleft_1.png",
      "./img/charakter/charakter_walkleft_2.png",
      "./img/charakter/charakter_walkleft_3.png",
      "./img/charakter/charakter_walkleft_4.png",
      "./img/charakter/charakter_walkleft_5.png",
      "./img/charakter/charakter_walkleft_6.png",
    ],

    right: [
      "./img/charakter/charakter_walkright_1.png",
      "./img/charakter/charakter_walkright_2.png",
      "./img/charakter/charakter_walkright_3.png",
      "./img/charakter/charakter_walkright_4.png",
      "./img/charakter/charakter_walkright_5.png",
      "./img/charakter/charakter_walkright_6.png",
    ],
  },

  chicken_boss: {
    attack: [
      "./img/chicken_boss/chicken_boss_attack/chicken_boss_attack_1.png",
      "./img/chicken_boss/chicken_boss_attack/chicken_boss_attack_2.png",
      "./img/chicken_boss/chicken_boss_attack/chicken_boss_attack_3.png",
      "./img/chicken_boss/chicken_boss_attack/chicken_boss_attack_4.png",
      "./img/chicken_boss/chicken_boss_attack/chicken_boss_attack_5.png",
      "./img/chicken_boss/chicken_boss_attack/chicken_boss_attack_6.png",
      "./img/chicken_boss/chicken_boss_attack/chicken_boss_attack_7.png",
      "./img/chicken_boss/chicken_boss_attack/chicken_boss_attack_8.png",
    ],

    caution: [
      "./img/chicken_boss/chicken_boss_caution/chicken_boss_caution_1.png",
      "./img/chicken_boss/chicken_boss_caution/chicken_boss_caution_2.png",
      "./img/chicken_boss/chicken_boss_caution/chicken_boss_caution_3.png",
      "./img/chicken_boss/chicken_boss_caution/chicken_boss_caution_4.png",
      "./img/chicken_boss/chicken_boss_caution/chicken_boss_caution_5.png",
      "./img/chicken_boss/chicken_boss_caution/chicken_boss_caution_6.png",
      "./img/chicken_boss/chicken_boss_caution/chicken_boss_caution_7.png",
      "./img/chicken_boss/chicken_boss_caution/chicken_boss_caution_8.png",
    ],

    dead: [
      "./img/chicken_boss/chicken_boss_dead/chickenboss_dead_1.png",
      "./img/chicken_boss/chicken_boss_dead/chickenboss_dead_2.png",
      "./img/chicken_boss/chicken_boss_dead/chickenboss_dead_3.png",
    ],

    hurt: [
      "./img/chicken_boss/chicken_boss_hurt/chickenboss_hurt_1.png",
      "./img/chicken_boss/chicken_boss_hurt/chickenboss_hurt_2.png",
      "./img/chicken_boss/chicken_boss_hurt/chickenboss_hurt_3.png",
    ],

    walk: [
      "./img/chicken_boss/chicken_boss_walk/chicken_boss_walk_1.png",
      "./img/chicken_boss/chicken_boss_walk/chicken_boss_walk_2.png",
      "./img/chicken_boss/chicken_boss_walk/chicken_boss_walk_3.png",
      "./img/chicken_boss/chicken_boss_walk/chicken_boss_walk_4.png",
    ],

    life: [
      "./img/chicken_boss/chicken_boss_life/lifeBoss_0.png",
      "./img/chicken_boss/chicken_boss_life/lifeBoss_20.png",
      "./img/chicken_boss/chicken_boss_life/lifeBoss_40.png",
      "./img/chicken_boss/chicken_boss_life/lifeBoss_60.png",
      "./img/chicken_boss/chicken_boss_life/lifeBoss_80.png",
      "./img/chicken_boss/chicken_boss_life/lifeBoss_100.png",
    ],
  },

  brown_chicken: [
    "./img/chicken/brown_chicken_1.png",
    "./img/chicken/brown_chicken_2.png",
    "./img/chicken/brown_chicken_3.png",
    "./img/chicken/chicken_dead_brown.png",
  ],

  yellow_chicken: [
    "./img/chicken/yellow_chicken_1.png",
    "./img/chicken/yellow_chicken_2.png",
    "./img/chicken/yellow_chicken_3.png",
    "./img/chicken/chicken_dead_yellow.png",
  ],
};

 
