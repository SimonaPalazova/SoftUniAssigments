'use strict'
const Game = new Phaser.Game(800, 500, Phaser.AUTO, 'game-canvas', { preload, create, update })

let player

function preload() {

Game.load.spritesheet('lady', 'lady.1536x235.6x1.png', 1536/6, 235)

}

function create() {
    
player = Game.add.sprite(0, Game.height/2, 'lady')
player.animations.add('', [], 5, true).play()
player.scale.setTo(0.3)
//player.anchor.setTo(0.5)

 
}

function update(){

    if(player.x !== Game.width - player.width)
    player.x+=2

}