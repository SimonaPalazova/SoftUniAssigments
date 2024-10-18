'use strict'
const Game = new Phaser.Game(800, 690, Phaser.AUTO, "",{preload, create})

let sfera

function preload(){
    Game.load.image('sfera','sphere-blue.png')
   
}

function create(){
    Game.stage.backgroundColor = "#e9c46a"
    createSfera(0)
    createSfera(70)
    createSfera(140)
    createSfera(210)
    createSfera(280)
    createSfera(350)
    createSfera(420)
    createSfera(490)
    createSfera(560)
    createSfera(630)
    }


const createSfera = function(whereY){
    sfera = Game.add.sprite(0, whereY, 'sfera')
    sfera.scale.setTo(0.1)

    Game.physics.enable(sfera)

    sfera.body.collideWorldBounds = true

    sfera.body.gravity.x = 500
    sfera.body.bounce.x = 1

}