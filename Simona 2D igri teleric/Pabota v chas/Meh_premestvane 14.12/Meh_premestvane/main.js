'use strict'
const Game = new Phaser.Game(600, 400, Phaser.AUTO, 'game-canvas', { preload, create, update })

let player
function preload() {
 Game.load.spritesheet('dude','dude-pink.288x40.9x1.png', 288 / 9, 40 / 1)

}

function create() {
    Game.stage.backgroundColor = '#aaaaaa'

    player = Game.add.sprite(200, Game.height / 2, 'dude')
    player.anchor.setTo(0.5)

    player.animations.add('left', [0, 1, 2, 3], 15, true)
    player.animations.add('right', [5, 6, 7, 8], 15, true)

    Game.input.keyboard.createCursorKeys()

}

function update() {
  if(Game.input.keyboard.createCursorKeys().left.isDown) {

    player.x -=2
    player.animations.play('left')
  }
  else if(Game.input.keyboard.createCursorKeys().right.isDown){
      player.x += 2
      player.animations.play('right')

  }
  else{
      player.frame = 4
  }
  if(Game.input.keyboard.createCursorKeys().up.isDown) {

    player.y -=2
    player.frame = 4
  }
  else if (Game.input.keyboard.createCursorKeys().down.isDown){
      player.y += 2
      player.frame = 4
}
else
{
    player.frame = 4
}
}