'use skrick'
const Game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create })

function preload() {
    Game.load.image('nebe', 'fon.jpg')
    Game.load.spritesheet('bee', 'bee.160x160.2x2.png', 160/2, 160/2)
    Game.load.spritesheet('rabbit', 'rabbit.1600x238.8x1.png', 1600/8, 238/1)
    Game.load.spritesheet('bird', 'bird.551x304.5x3.png', 551/5, 304/3)

}

function create() {
    const background = Game.add.sprite(0, 0, 'nebe')
    background.width = Game.width
    background.height = Game.height

    const player1 = Game.add.sprite(0, 20, 'bird')
    player1.animations.add('', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 20, true).play()

    const player2 = Game.add.sprite(400, 400, 'rabbit')
    player2.animations.add('', [], 15,  true).play()
    player2.scale.setTo(0.5)
    player2.anchor.setTo(0.5)

    const player3 = Game.add.sprite(720, 720, 'bee')
    player3.animations.add('', [], 30, true).play()

 
}