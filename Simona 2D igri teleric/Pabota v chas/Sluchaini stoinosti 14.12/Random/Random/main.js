'use strict'
const Game = new Phaser.Game(600, 400, Phaser.AUTO, 'game-canvas', { preload, create, update })

let player
let counter = 0

function preload() {
 Game.load.spritesheet('dude','dude-pink.288x40.9x1.png', 288 / 9, 40 / 1)

}

function create() {
    //player = Game.add.sprite(10, Game.height / 2, 'dude')

   const posX = Game.rnd.integerInRange(0, Game.width)
   const posY = Game.rnd.integerInRange(0, Game.height)
   
    player = Game.add.sprite(posX, posY, 'dude')
    player.anchor.setTo(0.5)

    player.animations.add('left', [0, 1, 2, 3], 15, true)
    player.animations.add('right', [5, 6, 7, 8], 15, true)


}

function update() {
   
//const posX = Game.world.randomX
//const posY = Game.world.randomY
//Game.add.sprite(posX, posY, 'dude')

if(counter === 50){
    player.x = Game.world.randomX
    player.y = Game.world.randomY

    counter = 0
}

else{
    counter++
}
}