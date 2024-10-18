'use strict'
const Game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "", {preload, create, update})

let dino1, dino2, dino3, dino4, dino5, dino6

function preload(){
    
    Game.load.image('d1', 'dino (0).png')
    Game.load.image('d2', 'dino (1).png')
    Game.load.image('d3', 'dino (2).png')
    Game.load.image('d4', 'dino (3).png')
    Game.load.image('d5', 'dino (4).png')
    Game.load.image('d6', 'dino6.png')

}
function create(){
    Game.stage.backgroundColor = "#4488AA";
    dino1 = createDino('d1')
    dino2 = createDino('d2')
    dino3 = createDino('d3')
    dino4 = createDino('d4')
    dino5 = createDino('d5')
    dino6 = createDino('d6')
  
}

function update(){
    moveDino(dino1)
    moveDino(dino2)
    moveDino(dino3)
    moveDino(dino4)
    moveDino(dino5)
    moveDino(dino6)

    Game.physics.arcade.collide(dino1, dino2, () => createDino('d1')) 
    Game.physics.arcade.collide(dino1, dino3, () => createDino('d3')) 
    Game.physics.arcade.collide(dino1, dino4, () => createDino('d4')) 
    Game.physics.arcade.collide(dino1, dino5, () => createDino('d5')) 

    Game.physics.arcade.collide(dino2, dino3, () => createDino('d2')) 
    Game.physics.arcade.collide(dino2, dino4, () => createDino('d4')) 
    Game.physics.arcade.collide(dino2, dino5, () => createDino('d5'))
    
    Game.physics.arcade.collide(dino3, dino4, () => createDino('d1'))
    Game.physics.arcade.collide(dino3, dino5, () => createDino('d1')) 

    Game.physics.arcade.collide(dino4, dino5, () => createDino('d5'))
    
    Game.physics.arcade.collide(dino6, dino1, () => dino1.scale.setTo(0))
    Game.physics.arcade.collide(dino6, dino2, () => dino2.scale.setTo(0))
    Game.physics.arcade.collide(dino6, dino3, () => dino3.scale.setTo(0))
    Game.physics.arcade.collide(dino6, dino4, () => dino4.scale.setTo(0))
    Game.physics.arcade.collide(dino6, dino5, () => dino5.scale.setTo(0))
}

const createDino = function(image){
const DINO = Game.add.sprite(Game.world.randomX, Game.world.randomY, image)
DINO.scale.setTo(0.6)
Game.physics.enable(DINO)
DINO.body.collideWorldBounds = true
return DINO
}
const moveDino = function(sprite){
    sprite.body.velocity.x += Game.rnd.integerInRange(-10, 10)
    sprite.body.velocity.y += Game.rnd.integerInRange(-10, 10)
}
