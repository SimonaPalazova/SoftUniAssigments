'use strict'
const Game = new Phaser.Game(600, 600, Phaser.AUTO, '', { preload, create })

function preload() {
    Game.load.spritesheet('bird', 'twitter.png', 600 / 4, 150);
}

function create() {
    Game.scale.pageAlignHorizontally = true
    Game.stage.backgroundColor = "#fff"
    
}

