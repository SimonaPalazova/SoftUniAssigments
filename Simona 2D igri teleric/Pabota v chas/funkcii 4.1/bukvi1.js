'use strict'

const Game = new Phaser.Game(600,400,Phaser.AUTO,"",{preload, create, update})

let player, komar, alien
let keyA, keyD
let keyW, keyS
let keyI, keyK
let keyJ, keyL


function preload(){
Game.load.spritesheet('komar', 'mosquito.png', 1024/3, 675/2)
Game.load.spritesheet('dude','dude-pink.288x40.9x1.png', 288 / 9, 40 )
Game.load.spritesheet('alien','alien.2096x786.8x3.png', 2096 / 8, 786/3 )
}

function create(){

    Game.stage.backgroundColor = '#ff8800'  //фон на страницата

    player = Game.add.sprite(100, 200, 'dude')

    player.animations.add('left', [0, 1, 2, 3], 10, true)
    player.animations.add('right', [5, 6, 7, 8], 10, true)
    player.anchor.setTo(0.5)

    Game.input.keyboard.createCursorKeys() = true

    komar = Game.add.sprite(100, 100, 'komar')
    komar.scale.setTo(0.2)
    komar.anchor.setTo(0.5)

    komar.animations.add('fly', [0,1,2,3,4], 15)

    keyA = Game.input.keyboard.addKey(Phaser.Keyboard.A)
    keyD = Game.input.keyboard.addKey(Phaser.Keyboard.D)
    keyW = Game.input.keyboard.addKey(Phaser.Keyboard.W)
    keyS = Game.input.keyboard.addKey(Phaser.Keyboard.S)

    alien = Game.add.sprite(300,100,'alien')
    alien.scale.setTo(0.2)
    alien.anchor.setTo(0.5)

    alien.animations.add('move', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 15)

    keyI = Game.input.keyboard.addKey(Phaser.Keyboard.I)
    keyK = Game.input.keyboard.addKey(Phaser.Keyboard.K)
    keyJ = Game.input.keyboard.addKey(Phaser.Keyboard.J)
    keyL = Game.input.keyboard.addKey(Phaser.Keyboard.L)
}

function update(){

    if (Game.input.keyboard.createCursorKeys().left.isDown) {
        player.x -=2
        player.animations.play('left')
    }
    else if (Game.input.keyboard.createCursorKeys().right.isDown) {
     player.x +=2
     player.animations.play('right')
     } else {
         player.frame = 4
     }
 
     if (Game.input.keyboard.createCursorKeys().up.isDown) {
         player.y -=2
    }
 
     if (Game.input.keyboard.createCursorKeys().down.isDown) {
         player.y +=2
    }

    if (keyS.isDown)
    {
        komar.y +=2
        komar.animations.play('fly')
    }
    if (keyW.isDown)
    {
        komar.y -=2
        komar.animations.play('fly')
    }
    if (keyD.isDown)
    {
        komar.x +=5
        komar.animations.play('fly')
    }
    if (keyA.isDown)
    {
        komar.x -=3
        komar.animations.play('fly')
    }
   if(komar.y<player.y+60&&komar.y>player.y-60)
   {
       if(komar.x<player.x+60&&komar.x>player.x-60)
       {
           Game.stage.backgroundColor = Phaser.Color.getRandomColor(0, 255, 255 )
       }
   }

if(player.x <= player.width / 2)
player.x = player.width
else if(player.x >= Game.width - player.width / 2)
player.x = Game.width - player.width / 2
