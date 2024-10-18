const Game = new Phaser.Game(600, 600, Phaser.AUTO, 'GameCanvas', { create })

function create() {
    Game.stage.backgroundColor = '#5A0002'
    Game.scale.pageAlignHorizontally = true

    Game.add.text(Game.width / 2, Game.height / 2, 'Hello, World!', { font: '50px', align: 'center', fill: '#fff' }).anchor.setTo(0.5)
}