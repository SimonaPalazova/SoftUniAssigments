'use stric'
const Game = new Phaser.Game(600, 400, Phaser.AUTO, 'game-canvas', { preload, create })
const y = 200

function preload() {
Game.load.image('fon', 'background-sky-transparent.png')
Game.load.spritesheet('mon', 'dude-org.288x40.9x1.png', 288 /9 , 40)
Game.load.spritesheet('ex', 'portal.960x960.5x5.png', 960 / 5, 960 / 5)
}

function create() {
    Game.add.sprite(0, 0,'fon')

    Game.scale.pageAlignHorizontally = true

    const dude1 = Game.add.sprite(100 , y, 'mon')
    dude1.anchor.setTo(0.5)
    dude1.animations.add('',[5,6,7,8],10, true).play()

    const dude2 = Game.add.sprite(300 , y, 'mon')
    dude2.anchor.setTo(0.5)
    dude2.frame = 4

    const dude3 = Game.add.sprite(500 , y, 'mon')
    dude3.anchor.setTo(0.5)
    dude3.animations.add('',[0,1,2,3],10, true).play()

    const portal = Game.add.sprite(300 , y, 'ex')
    portal.anchor.setTo(0.5)
    portal.animations.add('',[],10, true).play()

}