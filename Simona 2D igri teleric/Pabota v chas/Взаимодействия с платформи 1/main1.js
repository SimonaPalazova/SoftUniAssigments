'use strict'

const Game = new Phaser.Game(720, 500, Phaser.AUTO, 'game-canvas', { preload, create, update })

let player
let ground
let leftP, rightP
let otherP
let platforms
let coins
let counter = 0 // винаги се пише 0 , за да може да започне да отброява от 0 
let textCount



function preload() {
Game.load.image('platform', 'platform.png')
Game.load.image('background', 'desert.png')
Game.load.spritesheet('dude','dude-green.288x40.9x1.png', 288 / 9, 40 )
Game.load.spritesheet('coin', 'coins.png', 1198/5, 704/2)
}

function create() {
    createBackground()
    createPlayer()
    createPlatforms()
    createCoins()
    createCount()

    Game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    Game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
    Game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    Game.input.keyboard.addKey(Phaser.Keyboard.CONTROL)
   
}

function update(){
    movePlayer()
    updateText()

}

const createBackground = function() {
    const background = Game.add.sprite(0, 0, 'background')
    background.width = Game.width
    background.height = Game.height
}

const createPlayer = function(){
    player = Game.add.sprite(20,60, 'dude')
    player.anchor.setTo(0.5)
    player.animations.add('left', [0,1,2,3], 10, false)
    player.animations.add('right', [5,6,7,8], 10, false)
    player.frame = 4
   
    Game.physics.enable(player)
    player.body.gravity.y = 200
    player.body.collideWorldBounds = true

}

const movePlayer = function(){
    if (Game.input.keyboard.addKey(Phaser.Keyboard.LEFT).isDown) {
        player.body.velocity.x = -200
        player.animations.play('left')
    }
    else if (Game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).isDown) {
     player.body.velocity.x = 200
     player.animations.play('right')
     } else {
         player.frame = 4
         player.body.velocity.x = 0
     }
     if(Game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).isDown){
         player.y -= 10
     }
     if( Game.input.keyboard.addKey(Phaser.Keyboard.CONTROL).isDown){
         player.y -= 40
     }
     Game.physics.arcade.collide(player, platforms) // взаимодействие на играч с групата
     Game.physics.arcade.collide(player, coins, coinCollision) // взаимодействие на играч с паричките + функция за взимане на паричките
     
}

const createPlatforms = function(){
        platforms = Game.add.group() //създаване на група

        ground = Game.add.sprite(0, Game.height, 'platform')
        //добавяне на елементи в групата
        platforms.add(ground) //добавяне на елементи в групата
        ground.width  = Game.width
        ground.height = 100
        ground.y = Game.height - ground.height

        Game.physics.enable(ground)
        ground.body.immovable = true

        leftP = Game.add.sprite(50, 100, 'platform')
        platforms.add(leftP) //добавяне на елементи в групата
        leftP.scale.setTo(0.3)
        Game.physics.enable(leftP)
        leftP.body.immovable = true

        rightP = Game.add.sprite(460, 150, 'platform')
        platforms.add(rightP)//добавяне на елементи в групата 
        rightP.scale.setTo(0.25)
        Game.physics.enable(rightP)
        rightP.body.immovable = true  

        otherP = Game.add.sprite(240, 260, 'platform')
        platforms.add(otherP) //добавяне на елементи в групата
        otherP.scale.setTo(0.27)
         Game.physics.enable(otherP) //създава физика на променливата
        otherP.body.immovable = true
  
}  

const createCoins = function(){
    coins = Game.add.group()
    coins.enableBody = true // създава физика на група

    coins.create(580, 90, 'coin')
    coins.create(510, 90, 'coin')
    coins.create(100, 40, 'coin')
    coins.create(170, 40, 'coin')
    coins.create(240, 40, 'coin')
    coins.create(270, 200, 'coin')
    coins.create(330, 200, 'coin')
    coins.create(390, 200, 'coin')
    coins.create(390, 340, 'coin')
    coins.create(330, 340, 'coin')
    coins.create(270, 340, 'coin')
    coins.create(200, 340, 'coin')
    coins.create(520, 340, 'coin')
    coins.create(460, 340, 'coin')


    coins.forEach(function(_element){
        _element.animations.add('', [], 25, true).play()
        _element.scale.setTo(0.2)
    })
}

const coinCollision = function(_, _element){
 _element.destroy()
 counter++
}

const createCount = function(){
    const style = { fill: '#fff'}
    textCount = Game.add.text(550, 10, "COUNT: ")
}

const updateText = function(){
textCount.setText('COUNT: ' + counter)

if(counter>3){
    textCount.addColor('#00ff00', 0)
}
if (counter>7){
 textCount.addColor('#89cff0', 0)
}
if (counter>10){
    textCount.addColor('#d41e1e', 0)
   } 
}
