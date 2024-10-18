'use strict'

const game = new Phaser.Game(800, 800, Phaser.AUTO, '', { preload, create, update })

let firstLayer, player, cursors, monster
let behind
let front

function preload() {
    game.load.image('background', 'background-space.png')
    game.load.image('front','background-sky-transparent.png')
    game.load.image('behind', 'background-starfield.png')
    game.load.tilemap('tilemap', 'space-platforms-map.json', null, Phaser.Tilemap.TILED_JSON)
    game.load.image('tileset', 'space-platforms-set.png')
    game.load.spritesheet('player', 'dude-org.png', 288 / 9, 48)
    game.load.spritesheet( 'mon', 'monster.904x176.4x1.png', 904/4, 176)
   
    
}

function create() {
    game.stage.backgroundColor = '#fff'
    game.scale.pageAlignHorizontally = true
    game.add.sprite(0, 0, 'background')
    behind = game.add.tileSprite(0,0, game.width + 20, game.height + 20, 'behind')
    front = game.add.tileSprite(0,0, game.width + 20, game.height + 20, 'front')
  
    behind.autoScroll(0, -40)
    front.autoScroll(0, -80)
    createMap()
    createPlayer()

    createMon()

    cursors = game.input.keyboard.createCursorKeys()
    game.world.setBounds(0, 0, 820, 820)
    game.camera.follow(player)
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

    player.animations.add('walk', [], 10, true)
    

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
    
    game.physics.arcade.collide(monster, firstLayer)
    game.physics.arcade.collide(monster, player, MonCollision)
}

const movePlayer = function () {
    if (cursors.left.isDown) {
        player.body.velocity.x = -150
        player.animations.play('walk')
    } else if (cursors.right.isDown) {
        player.body.velocity.x = 150
        player.animations.play('walk')
    } else {
        player.body.velocity.x = 0
        player.frame = 4
    }

    if (cursors.up.isDown) {
        player.body.velocity.y = -250
    }
}

const createMon = function () {
   monster = game.add.sprite(game.world.randomX, game.world.randomY, 'mon')
    monster.scale.setTo(0.2)
    monster.animations.add("", [0,1,2,3], 20, true).play()

    game.physics.enable(monster)

    monster.body.collideWorldBounds = true
    monster.body.bounce.x = 0.8
    monster.body.gravity.x = 50
     
    
}

const MonCollision = function (monster) {
    monster.destroy()
    createMon()
    
}

const enablePsArcade = function (sprite) {
    game.physics.enable(sprite)
    sprite.body.collideWorldBounds = true
    sprite.body.bounce.y = 0.4
    sprite.body.gravity.y = 200
}