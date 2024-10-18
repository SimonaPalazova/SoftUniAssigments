'use skrict'
const Game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create })

function preload() {

    Game.load.spritesheet('ex', 'explosion.896x896.7x7.png', 896 / 7, 896 / 7)
    Game.load.spritesheet('player', 'dude-red.288x40.9x1.png', 288 / 9 , 40 / 1 )
    Game.load.spritesheet('man', 'guy.980x460.7x2.png', 980 / 7, 460 / 2)
}

function create() {
    
const explosion = Game.add.sprite(0, 0, 'ex')
explosion.animations.add('', [], 60, true).play()

const person = Game.add.sprite(100, 200, 'player')
person.animations.add('left', [0, 1, 2, 3], 10, true).play()

 const person1 = Game.add.sprite(300, 200, 'player')
 person1.animations.add('right', [5, 6, 7, 8], 10, true).play()

 const gui = Game.add.sprite(400, 400, 'man')
 gui.animations.add('', [], 10, true).play()
 gui.scale.setTo(0.5)
 gui.anchor.setTo(0.5)
}