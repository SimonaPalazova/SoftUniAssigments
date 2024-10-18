const Game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create })

function preload() {
    Game.load.image('fon', 'background.jpeg')
    Game.load.image('choveche', 'chuchi.png')

}

function create() {
    Game.add.sprite(0,0, 'fon')

    Game.add.sprite(0,0, 'choveche')
    Game.add.sprite(671,0, 'choveche')
    Game.add.sprite(544,0, 'choveche')
    Game.add.sprite(408,0, 'choveche')
    Game.add.sprite(272,0, 'choveche')
    Game.add.sprite(136,0, 'choveche')

    Game.add.sprite(0,327, 'choveche')
    Game.add.sprite(671,327, 'choveche')
    Game.add.sprite(544,327, 'choveche')
    Game.add.sprite(408,327, 'choveche')
    Game.add.sprite(272,327, 'choveche')
    Game.add.sprite(136,327, 'choveche')

    Game.add.sprite(0,653, 'choveche')
    Game.add.sprite(671,653, 'choveche')
    Game.add.sprite(544,653, 'choveche')
    Game.add.sprite(408,653, 'choveche')
    Game.add.sprite(272,653, 'choveche')
    Game.add.sprite(136,653, 'choveche')
}