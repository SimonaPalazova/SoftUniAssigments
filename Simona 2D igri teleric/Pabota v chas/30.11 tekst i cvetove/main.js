'use stric'
const Game = new Phaser.Game(600, 500, Phaser.AUTO, 'game-canvas', { preload, create, update })
let counter = 0
let tt2

function preload() {

    
}

function create() {
    
    Game.stage.backgroundColor = "#4488AA";
    Game.scale.pageAlignHorizontally = true;

    let text = Game.add.text(Game.width/2, Game.height/2, "Здравей!")
    text.anchor.setTo(0.5)

    const text1 = Game.add.text(130, 300, "Велико Търново!")
    text1.font = 'Arial Black';
    text1.fontSize = 40;
    text1.fontWeight = 'bold';
    text1.fill ='#33610f';

    tt2 = Game.add.text(280, 350, counter)
 
 
}

function update(){
tt2.setText(counter++)
}