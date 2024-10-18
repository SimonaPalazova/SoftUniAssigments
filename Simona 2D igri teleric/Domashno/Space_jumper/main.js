'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, '', { preload, create, update })

let firstLayer, player, cursors, ship

function preload() {
    game.load.image('background', 'background-space.png')
    game.load.tilemap('tilemap', 'space-platforms-map.json', null, Phaser.Tilemap.TILED_JSON)
    game.load.image('tileset', 'space-platforms-set.png')
    game.load.spritesheet('player', 'dude-org.png', 288 / 9, 48)
    game.load.image('ship', 'ship.png')
    
}

function create() {
    game.stage.backgroundColor = '#fff'
    game.scale.pageAlignHorizontally = true
    game.add.sprite(0, 0, 'background')
    createMap()
    createPlayer()

    createShip()

    cursors = game.input.keyboard.createCursorKeys()
}

const createMap = function () {
    const map = game.add.tilemap('tilemap')
    map.addTilesetImage('space-platforms-set', 'tileset')
         
    firstLayer = map.createLayer(0)
    map.createLayer(1)

// играча да може да взаимодейства с картата
    map.setCollisionByExclusion([])
}

const createPlayer = function () {
    player = game.add.sprite(game.width / 2, game.height / 2, 'player')
    player.scale.setTo(0.8)

    player.animations.add('walk-left', [0, 1, 2, 3], 10, true)
    player.animations.add('walk-right', [5, 6, 7, 8], 10, true)

    game.physics.enable(player)
    player.body.collideWorldBounds = true 
    player.body.bounce.y = 0.4
    player.body.gravity.y = 200
//аркадна физика, играча да взаимодейства с космическия кораб
// това е функция, която създавам по-надолу
    enablePsArcade(player)
}

function update() {
    movePlayer()

    game.physics.arcade.collide(player, firstLayer)
    
    game.physics.arcade.collide(ship, firstLayer)
    game.physics.arcade.collide(ship, player, shipCollision)
}

const movePlayer = function () {
    if (cursors.left.isDown) {
        player.body.velocity.x = -150
        player.animations.play('walk-left')
    } else if (cursors.right.isDown) {
        player.body.velocity.x = 150
        player.animations.play('walk-right')
    } else {
        player.body.velocity.x = 0
        player.frame = 4
    }

    if (cursors.up.isDown) {
        player.body.velocity.y = -250
    }
}

const createShip = function () {
    ship = game.add.sprite(game.world.randomX, game.world.randomY, 'ship' )
    ship.scale.setTo(0.4)
    enablePsArcade(ship)
}

const shipCollision = function (ship) {
    ship.destroy()
    createShip()
}

const enablePsArcade = function (sprite) {
    game.physics.enable(sprite)
    sprite.body.collideWorldBounds = true
    sprite.body.bounce.y = 0.4
    sprite.body.gravity.y = 200
}