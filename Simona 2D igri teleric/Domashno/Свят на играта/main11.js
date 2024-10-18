const game = new Phaser.Game(600, 600, Phaser.AUTO, "", {preload, create, update})

let player, monster
let cursors
let map, zemya, ground
let counter = 0

function preload(){
    game.load.spritesheet('dude', 'dude-org.png', 288/9, 48)
    game.load.image('tiles', '16x16_tileset_platfprms_chao_garden.png')
    game.load.spritesheet( 'mon', 'monster.904x176.4x1.png', 904/4, 176)
    game.load.image('ground', 'ground.png')
    game.load.tilemap('karta', 'map.json', null, Phaser.Tilemap.TILED_JSON)
}

function create(){
game.stage.backgroundColor = '#fff'
game.scale.pageAlignHorizontally = true;

// game.height-90, защото 90 ни е високо изобрежението
// game.width, game.height са края на полето докъдето ще се върти изображението
ground = game.add.tileSprite(0, game.height-90, game.width, game.height,'ground')
ground.fixedToCamera = true

createMap()
createPlayer()

map.setCollisionByExclusion([])

game.world.setBounds(0, 0, 1200, 1000)

game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER)

cursors = game.input.keyboard.createCursorKeys()

}

function update(){

    moviePlayer()
     ground.tilePosition.x -= 3

    if (counter === 100) {
        //Ако е точно 100, създаваме едно чудовище на случаен принцип
        const monster = game.add.sprite(game.world.randomX, game.world.randomY, 'mon')
        monster.scale.setTo(0.2)
        monster.animations.add("", [0,1,2,3], 20, true).play()
        counter = 0
    } else {
        ++counter
    }
    game.physics.arcade.collide(player, zemya)
    game.physics.arcade.collide(player, ground)

  
}

const createMap = function(){
    map = game.add.tilemap('karta')
    map.addTilesetImage('16x16_tileset_platfprms_chao_garden','tiles')
    
    zemya = map.createLayer(0)
    map.createLayer(1)

    map.setCollisionByExclusion([])
}

const createPlayer = function(){
    player = game.add.sprite(game.width/2, game.height/2, 'dude')
    player.anchor.setTo(0.5)
    player.scale.setTo(0.8)
    player.animations.add('left', [0, 1, 2, 3], 10)
    player.animations.add('reight', [5, 6, 7, 8], 10)
    
    //позволяваме физика на играча
    //От този ред надолу имаме достъп до характеристиката му body
    game.physics.enable(player)
    game.physics.enable(ground)
    
    //да разрешим да си взаимодействат плаъера с гроунд
    ground.body.immovable = true

    //включваме взаимодействие с границите на играта, за да не излиза извън прозореца
    player.body.collideWorldBounds = true
    //добавяме вертикален отскок (стойности между 0 и 1)
    player.body.bounce.y = 0.8
    //добавяме вертикална гравитация
    player.body.gravity.y = 50
     
}
const moviePlayer = function(){
    if(cursors.left.isDown){
        //използваме ускорение, а не местим играча по x или y
        player.body.velocity.x = -80
        player.animations.play('left')
    } else if(cursors.right.isDown){
        player.body.velocity.x = 80
        player.animations.play('reight')
    } else {
        // зануляваме ускорението по хоризонтала, ако никой от бутоните не е натиснат
        player.body.velocity.x = 0
    }
    
    if(cursors.up.isDown){
        player.body.velocity.y = -80
    } else if(cursors.down.isDown){
        player.body.velocity.y = 80
    } else {
        //  не зануляваме ускорението по вертикала, защото ще пречи на ускорението
        //player.body.velocity.y=0
    }
    // проверяваме дали нито един от клавишите не е натиснат и само тогава спира анимацията
    if(cursors.up.isUp&&cursors.left.isUp&&cursors.right.isUp){
        player.frame=4
   }   
}
