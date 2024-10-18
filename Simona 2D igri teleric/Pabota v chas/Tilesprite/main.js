'use strict'
const Game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

let bg
let front, behind

function preload() {
Game.load.image('bg', 'background-sky.png')
Game.load.image('front','background-sky-transparent.png')
Game.load.image('behind', 'background-starfield.png')
}

function create() {
 //bg = Game.add.tileSprite(0,0, Game.width, Game.height, 'bg')
 //bg.autoScroll(32, -20)

  behind = Game.add.tileSprite(0,0, Game.width, Game.height, 'behind')
  front = Game.add.tileSprite(0,0, Game.width, Game.height, 'front')

  behind.autoScroll(0, -40)
  front.autoScroll(0, -80)
}

function update() {
 
}

//spritesheet - за създаване на анимации
//tilset - за създаване на карти
//tilesprite - за безкрайно повторение