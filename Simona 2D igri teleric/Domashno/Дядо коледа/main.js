'use strict'
const Game = new Phaser.Game(600, 400, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {

Game.load.spritesheet('tree', 'tree.png', 505/5, 426/3)
Game.load.spritesheet('koleda', 'hoho.png', 600/4, 600/4)
Game.load.image('zima', 'zima.jpg')
Game.load.spritesheet('kambana', 'pipo-btleffect217_480.png', 2400/5, 1440/3)

}

function create() {
 
    Game.scale.pageAlignHorizontally = true

    Game.add.sprite(0, 0, 'zima')

    const hoho = Game.add.sprite(30, 50, 'koleda')
    hoho.animations.add('', [], 55, true).play()

    const elha = Game.add.sprite(220, 50, 'tree')
    elha.animations.add('',[], 8, true).play()

    const kambana = Game.add.sprite(600, 0, 'kambana')
    kambana.animations.add('',[], 8, true).play()
    kambana.scale.setTo(0.3)
    kambana.anchor.setTo(1, 0)

    Game.add.text(10, 10, "Весела Коледа")
    const t1 = Game.add.text(10, 210, "Весела Коледа")
    t1.font = 'Arial Black'
    t1.fontSize = 40
    t1.fontWeight = 'bold'
    t1.fill = '#79018C'

    const t2 = Game.add.text(10, 260, "Весела Коледа")
    t2.font = 'Arial Black'
    t2.fontSize = 42
    t2.fontWeight = 'bold'
    t2.fill = '#4C0070'

    const t3 = Game.add.text(10, 320, "Весела Коледа")
    t3.font = 'Arial Black'
    t3.fontSize = 45
    t3.fontWeight = 'bold'
    t3.fill = '#160040'
}

function update() {

}