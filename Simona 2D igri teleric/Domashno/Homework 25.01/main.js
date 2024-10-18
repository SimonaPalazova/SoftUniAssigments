'use strict'
const Game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "", {preload, create, update})

let dino1, dino2, dino3, dino4, dino5, dino6
let Bo


function preload(){
    
    Game.load.image('d1', 'dino (0).png')
    Game.load.image('d2', 'dino (1).png')
    Game.load.image('d3', 'dino (2).png')
    Game.load.image('d4', 'dino (3).png')
    Game.load.image('d5', 'dino (4).png')
    Game.load.spritesheet('blob', 'blob.552x310.3x2.png', 552 / 3, 310 / 2)
}

function create(){
    Game.stage.backgroundColor = "#4488AA";
    dino1 = createDino('d1')
    dino2 = createDino('d2')
    dino3 = createDino('d3')
    dino4 = createDino('d4')
    dino5 = createDino('d5')
    Bo = createBlob('blob')
    
    Game.input.keyboard.createCursorKeys() = true
}

function update(){
  movieDino(dino1)
  movieDino(dino2)
  movieDino(dino3)
  movieDino(dino4)
  movieDino(dino5)
  movieBlob(Bo) 

  Game.physics.arcade.collide(Bo, dino1, () => dino1.scale.setTo(0))
  Game.physics.arcade.collide(Bo, dino2, () => dino2.scale.setTo(0))
  Game.physics.arcade.collide(Bo, dino3, () => dino3.scale.setTo(0))
  Game.physics.arcade.collide(Bo, dino4, () => dino4.scale.setTo(0))
  Game.physics.arcade.collide(Bo, dino5, () => dino5.scale.setTo(0))
 }
  
 const createDino = function(image){
 
    const DINO = Game.add.sprite(Game.world.randomX, Game.world.randomY, image)
    DINO.scale.setTo(0.5)
   
    Game.physics.enable(DINO)
    DINO.body.collideWorldBounds = true
    return DINO 

}

const createBlob = function(spritesheet){
   const player = Game.add.sprite(Game.world.randomX, Game.world.randomY,'blob')
    player.animations.add('1', [], 10, true)
    player.scale.setTo(0.5)


    Game.physics.enable(player)
    player.body.collideWorldBounds = true
    return player 
}

const movieDino = function(sprite){

    sprite.body.velocity.x += Game.rnd.integerInRange(-10, 10)
    sprite.body.velocity.y += Game.rnd.integerInRange(-10, 10)
}

const movieBlob = function(sprite){

    sprite.body.velocity.x += Game.rnd.integerInRange(-5, 5)
    sprite.body.velocity.y += Game.rnd.integerInRange(-5, 5)


    if (Game.input.keyboard.createCursorKeys().left.isDown) {
        sprite.x -=6
        sprite.animations.play('1')
    }
    else if (Game.input.keyboard.createCursorKeys().right.isDown) {
     sprite.x +=6
     sprite.animations.play('1')
     } else {
         sprite.frame = 4
     }
 
     if (Game.input.keyboard.createCursorKeys().up.isDown) {
         sprite.y -=6
         
     }
 
     if (Game.input.keyboard.createCursorKeys().down.isDown) {
         sprite.y +=6
         
     }


}


