'use strict'
const Game = new Phaser.Game(600, 300, Phaser.AUTO, 'game-canvas', { preload, create, update })

let player
let player2
let speed
let speed1

function preload() {
 Game.load.spritesheet('dude','dude-org.288x40.9x1.png', 288 / 9, 40 / 1)
Game.load.spritesheet('pinko', 'dude-green.288x40.9x1.png', 288/9, 40)
}

function create() {
    player = Game.add.sprite(10, Game.height / 2, 'dude')
    player.anchor.setTo(0.5)

    player2 = Game.add.sprite(10, 270, 'pinko')
    player2.anchor.setTo(0.5)
    
    player.animations.add('left', [0, 1, 2, 3], 15, true)
    player.animations.add('right', [5, 6, 7, 8], 15, true)

    player2.animations.add('1', [0, 1, 2, 3], 15, true)
    player2.animations.add('2', [5, 6, 7, 8], 15, true)

}

function update() {
   
    if(player.x >= Game.width - Game.width/2){
    
        speed = -3
        player.animations.play('left')
    }
    

    if(player.x < player.width/2){
    
        speed = 3
        player.animations.play('right')
    }

    if(player2.x >= Game.width - player2.width/2){
    
        speed1 = -5
        player2.animations.play('1')
    }
    

    if(player2.x < player2.width/2){
    
        speed1 = 5
        player2.animations.play('2')
    }

    player.x += speed
    player2.x += speed1

}