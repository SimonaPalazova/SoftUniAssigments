'use strict'
const Game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {

    Game.load.image('fon', 'sky.jpg')
    Game.load.image('samolet', 'samolet.png')
}

function create() {
    
    const backround = Game.add.sprite(0, 0, 'fon')
    backround.width = Game.width
    backround.height = Game.height

    const player1 = Game.add.sprite(0, 400, 'samolet')
    player1.scale.setTo(0.3)
    player1.anchor.setTo(0)

    const player2 = Game.add.sprite(150, 400, 'samolet')
    player2.scale.setTo(0.3)
    player2.anchor.setTo(0)
    
    const player3 = Game.add.sprite(300, 400, 'samolet')
    player3.scale.setTo(0.3)
    player3.anchor.setTo(0)

    const player4 = Game.add.sprite(450, 400, 'samolet')
    player4.scale.setTo(0.3)
    player4.anchor.setTo(0)

    const player5 = Game.add.sprite(600, 400, 'samolet')
    player5.scale.setTo(0.3)
    player5.anchor.setTo(0)
}

function update() {

}