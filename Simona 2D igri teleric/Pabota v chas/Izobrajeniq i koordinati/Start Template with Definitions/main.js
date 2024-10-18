const Game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create })

function preload()
 {
    Game.load.image('fon', 'background.jpg')
    Game.load.image('kuche', 'dog.png')
    
}

function create()
 {
Game.add.sprite(0, 0, 'fon')  
  Game.add.sprite( 0, 0, 'kuche')
  Game.add.sprite(272, 272, 'kuche')
  Game.add.sprite(544, 0, 'kuche')
  Game.add.sprite(0, 544, 'kuche')
  Game.add.sprite(544, 544, 'kuche')
 
 
}