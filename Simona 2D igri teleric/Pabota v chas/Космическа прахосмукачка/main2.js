'use strict'

const Game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload, create, update})

let background
let ship, clouds, stars
let textAlive, textDead
let bullets
let counter = 0
let countDead = 0


function preload() {
Game.load.image('ship', 'ship.png')
Game.load.image('bullet', 'bullet.png')
Game.load.image('background', 'background-starfield.png')
Game.load.image('clouds', 'background-sky-transparent.png')
}

function create() {
    Game.scale.pageAlignHorizontally = true
    // tileSpraite - за да можем да движим фоновите картинки
    background = Game.add.tileSprite(0, 0, Game.width, Game.height, 'background')
    background.width = Game.width
    background.height = Game.height

    clouds = Game.add.tileSprite(0, 0, Game.width, Game.height, 'clouds') 
    clouds.width = Game.width
    clouds.height = Game.height

    ship = Game.add.sprite(300, 300, 'ship')
    ship.anchor.setTo(0.5)
    Game.physics.arcade.enable(ship)
    movieShip()

    bullets = Game.add.group()
   
    createText()
}
function update() {
    movieBackground() 

    Game.physics.arcade.collide(ship, bullets, destroyBullet)

    if(counter === 8) {
    createBullet() 
    counter = 0   
    } else{
       counter++
    }

    movieBullet()
    updateText()

 }


 const movieBackground = function(){
    //движение на backgrounda
    background.tilePosition.y -= 1
    clouds.tilePosition.y -= 1
 }
 
 const createText = function(){
   const style = { fill: '#fff'}
   textAlive = Game.add.text(10, 10, 'Alive: ' + bullets.length, style)
   textDead = Game.add.text(Game.width - 10, 10, 'Dead: 0', style)
   textDead.anchor.setTo(1, 0)
}

const movieShip = function(){

   ship.inputEnabled = true
   ship.input.enableDrag()
   Game.physics.arcade.enable(ship)
   ship.body.immovable = true

}

const createBullet = function(){
   const BULLET = bullets.create(Game.world.randomX, Game.world.randomY, 'bullet')
   BULLET.scale.setTo(0.8)
   BULLET.anchor.setTo(0.5)
   Game.physics.arcade.enable(BULLET)
}

const movieBullet = function(){
   const speed = 10

   bullets.forEach(_bullet => {

      const maxTime = Game.rnd.integerInRange(100, 2000)
      Game.physics.arcade.moveToObject(_bullet, ship, speed, maxTime)

   })
}

const destroyBullet = function(_ship, _bullet){
   _bullet.destroy()
   countDead++
}

const updateText = function(){

   const dead = bullets.countDead()

   textAlive.setText('Alive: ' + bullets.length)
   textDead.setText('Dead: ' + countDead)

}


