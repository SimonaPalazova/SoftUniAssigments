'use strict'
const Game = new Phaser.Game(800, 600, Phaser.AUTO, "",{preload, create, update})

let sfera, sfera1, sfera2

function preload(){
    Game.load.image('sfera','sphere.png')
    Game.load.image('sfera1', 'sphere-blue.png')
	Game.load.image('sfera2', 'sphere-green.png')
}

function create(){
    Game.stage.backgroundColor = "#e9c46a"

    //ИЗВИКВАНЕ С 2 ПАРАМЕТЪРА
    
    createSfera(0, 0)
    createSfera(100, 100)
    createSfera(200, 200)
    createSfera(300, 300)
    createSfera(400, 400)
    createSfera(500, 500)
    
    // Game.physics.enable(sfera)
    // Game.physics.enable(sfera1)

    // sfera.body.collideWorldBounds = true
    // sfera1.body.collideWorldBounds = true

    // sfera.body.gravity.y = 200
    // sfera.body.bounce.y = 1
    // sfera.body.gravity.x = 200
    // sfera.body.bounce.x = 1

    // sfera1.body.gravity.x = 200
    // sfera.body.bounce.x = 1
    // sfera1.body.gravity.y = 200
    // sfera1.body.bounce.y = 200

    }

function update(){
    
}

const createSfera = function(whereX, whereY){

    sfera = Game.add.sprite(whereX, whereY, 'sfera')
    sfera.scale.setTo(0.1)

    Game.physics.enable(sfera)

    sfera.body.collideWorldBounds = true
    sfera.body.gravity.y = 200
    sfera.body.bounce.y = 1
    sfera.body.gravity.x = 200
    sfera.body.bounce.x = 1

}


// функция за създаване на сферата в началото
// const createSfera = function(){
//     sfera = Game.add.sprite(0, 0, 'sfera')
//     sfera.scale.setTo(0.1)

//     sfera1 = Game.add.sprite(100, 0, 'sfera1')
//     sfera1.scale.setTo(0.1)
