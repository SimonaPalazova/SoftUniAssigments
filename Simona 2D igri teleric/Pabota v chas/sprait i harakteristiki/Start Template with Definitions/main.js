'use strict'
const Game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-canvas', { preload, create })

function preload() {
    Game.load.image('gumball' , 'gumball.png')
    Game.load.image('fon' , 'GumballWeb_01_o.jpg')

}

function create() {
  const backround = Game.add.sprite( 0, 0, 'fon')
  backround.width = Game.width
backround.height = Game.height

 const player = Game.add.sprite( 0, 0, 'gumball')
player.scale.setTo(0.2)

const player1 = Game.add.sprite( 800, 600, 'gumball')
player1.scale.setTo(0.2)
player1.anchor.setTo(1)


const player2 = Game.add.sprite( 800,0, 'gumball')
player2.scale.setTo(0.2)
player2.anchor.setTo(1, 0)

const player3 = Game.add.sprite( 0,600, 'gumball')
player3.scale.setTo(0.2)
player3.anchor.setTo(0, 1)

const player4 = Game.add.sprite( 400, 300, 'gumball')
player4.scale.setTo(0.5)
player4.anchor.setTo(0.4)



}
function update(){

}