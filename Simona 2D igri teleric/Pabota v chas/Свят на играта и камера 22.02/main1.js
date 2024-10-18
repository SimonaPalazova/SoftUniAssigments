'use strict'
const Game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-canvas', { preload, create, update })

let player
let jumpButton
let platforms
let bird
let counter = 0
let textCount


function preload() {
Game.load.image('platform', 'platform1.png')
Game.load.image('background', 'background.jpg')
Game.load.spritesheet('dude','dude-green.288x40.9x1.png', 288 / 9, 40 )
Game.load.spritesheet('bird', 'bird.600x150.4x1.png', 600 / 4, 150 /1)
}

function create() {
    createBackground()
    createPlayer()
    createPlatforms()
    createCount()

  
    Game.input.createCursorKeys = true
    jumpButton = Game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    Game.world.setBounds(0, 0, 1200, 800)
    Game.camera.follow(player)
   


}

function update() {
movePlayer()
updateText()

Game.physics.arcade.collide(player, platforms, checkJump)
Game.physics.arcade.collide(player, bird, birdCollision)

}
const createBackground = function() {
    const background = Game.add.sprite(0, 0, 'background')
   // background.width = Game.width
   // background.height = Game.height
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
    if (Game.input.keyboard.createCursorKeys().left.isDown) {
        player.body.velocity.x = -200
        player.animations.play('left')
    }
    else if (Game.input.keyboard.createCursorKeys().right.isDown) {
     player.body.velocity.x = 200
     player.animations.play('right')
     } else {
         player.frame = 4
         player.body.velocity.x = 0
     }
 
     if(jumpButton.isDown){
        player.body.velocity.y = -200
     }
     
}

const createPlatforms = function(){
    bird = Game.add.group()
    bird.create(150, 19, 'bird')
    bird.create(160, 45, 'bird')
    bird.create(444, 80, 'bird')
    bird.create(180, 328, 'bird')
    bird.create(531, 296, 'bird')
    bird.create(34, 596, 'bird')
    bird.create(53, 466, 'bird')
    bird.create(111, 306, 'bird')
    bird.create(31, 206, 'bird')
    bird.create(51, 496, 'bird')

    platforms = Game.add.group()
    platforms.enableBody = true

    platforms.create(0, 100, 'platform')
    platforms.create(100, 400, 'platform')
    platforms.create(200, 250, 'platform')
    platforms.create(300, 50, 'platform')
    platforms.create(500, 150, 'platform')
    platforms.create(450, 350, 'platform')
    platforms.create(560, 470, 'platform')

    platforms.forEach(function(_platform){

    _platform.scale.setTo(0.7)
    _platform.body.immovable = true
    _platform.body.velocity.x = 100
    _platform.body.bounce.x = 1
    _platform.body.collideWorldBounds = true
    bird.create(_platform.x +10, _platform.y-30, 'bird')
    })

    bird.forEach(function(_bird){
        Game.physics.enable(_bird)
        _bird.scale.setTo(0.2)
        _bird.animations.add('', [], 10, true).play()
        _bird.body.velocity.x = 130
        _bird.body.bounce.x = 1
        _bird.body.collideWorldBounds = true
       
    })
    
}

const checkJump = function(){
    if(Game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).isDown){
        player.body.velocity.y = -200
    }
}

const birdCollision = function(_, _bird){
    _bird.destroy()
    counter++
}

const createCount = function(){
    const style = { fill: '#fff'}
    textCount = Game.add.text(600, 400, "COUNT: ")
}

const updateText = function(){
textCount.setText('COUNT: ' + counter)

if(counter>3){
    textCount.addColor('#ffff00', 0)
}
if (counter>7){
 textCount.addColor('#0000ff', 0)
}
if (counter>10){
    textCount.addColor('#ff0040', 0)
   } 
}



