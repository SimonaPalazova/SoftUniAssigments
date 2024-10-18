'use stric'
const Game = new Phaser.Game(900, 800, Phaser.AUTO, 'game-canvas', { preload, create })
let y = 200

function preload() {
    Game.load.spritesheet('mon', 'monster.903x768.10x8.png', 903 / 10, 768 / 8)

}

function create() {
    const monster1 = Game.add.sprite(0, y, 'mon')
    monster1.animations.add('',[0, 55, 65, 75], 40).play()

    const monster2 = Game.add.sprite(150, y, 'mon')
    monster2.animations.add('',[0, 55, 65, 75], 40, true).play()

    const monster3 = Game.add.sprite(300, y, 'mon')
    monster3.animations.add('',[35, 36, 37, 38, 39], 10, true).play()

    const monster4 = Game.add.sprite(450, y, 'mon')
    monster4.animations.add('',[ 0, 10, 30, 40, 50, 60, 70, 1, 11, 21, 31, 41, 51, 61, 71], 10, true).play()

    const monster5 = Game.add.sprite(600, y, 'mon')
    monster5.animations.add('',[19, 18, 17, 16, 15, 14, 13, 23, 33, 43, 53, 63, 73], 10, true).play()

    const monster6 = Game.add.sprite(750, y, 'mon')
    monster6.animations.add('',[0, 20, 46], 6, true).play()
}