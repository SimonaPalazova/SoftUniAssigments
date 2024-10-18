'use strict'
const Game = new Phaser.Game(600, 400, Phaser.AUTO, 'game-canvas', { preload, create, update })

let player
let jumpButton
let map
let ground

function preload() {
   Game.load.spritesheet('dude','dude-green.288x40.9x1.png', 288 / 9, 40 )

   Game.load.image('tileset', 'space-platforms-tileset.png')
   Game.load.image('background','32x32_tileset_woodland.png')
   Game.load.tilemap('platforms', 'map1.json',null, Phaser.Tilemap.TILED_JSON)

}

function create() {

   Game.input.createCursorKeys = true
   jumpButton = Game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
   
   map = Game.add.tilemap('platforms')
   map.addTilesetImage('space-platforms-tileset', 'tileset')
   map.addTilesetImage('32x32_tileset_woodland', 'background')

   map.setCollisionByExclusion([])

   map.createLayer(1)
   ground = map.createLayer(0)
   map.createLayer(2)

   createPlayer()
}

function update() {
   movePlayer()
  
   Game.physics.arcade.collide(player,ground,cheskJump)

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
       player.body.velocity.y = -150
    }
    
}

const cheskJump = function(){
   if(Game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).isDown){
      player.body.velocity.y =-200
   }
   
}