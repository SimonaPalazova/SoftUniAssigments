'use strict'
const Game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

let arrow1, arrow2, arrow3, arrow4
let ball1, ball2, ball3, ball4
let ghost


function preload() {
    Game.load.image('arrow', 'arrow.png')
    Game.load.image('ball', 'green_ball.png')
    Game.load.spritesheet('ghost', 'ghost.700x525.4x3.png', 700/4, 525/3)
    
    }

function create() {
    Game.stage.backgroundColor = '#3e5f96'

    arrow1 = Game.add.sprite(200, 150, 'arrow')
    ball1 = Game.add.sprite(180, 165, 'ball')
    arrow1.pivot.x = 100

    arrow2 = Game.add.sprite(600, 150, 'arrow')
    ball2 = Game.add.sprite(580, 165, 'ball')
    arrow2.pivot.y = 100

    arrow3 = Game.add.sprite(200, 530, 'arrow');
    ball3 = Game.add.sprite(180, 500, 'ball')
    arrow3.pivot.x = 100
    arrow3.pivot.y = 100

    arrow4 = Game.add.sprite(600, 450, 'arrow');
    ball4 = Game.add.sprite(580, 420, 'ball')
    arrow4.pivot.x = 100
    arrow4.anchor.setTo(0.5)

    createGhost()

    Game.input.createKursorKeys = true


}

function update() {
   arrow1.rotation += 0.05 
   arrow2.rotation += 0.05 
   arrow3.rotation += 0.05
   arrow4.rotation += 0.05
   moveGhost() 
   sblusuk1()
   sblusuk2()
   sblusuk3()
   sblusuk4()
}

const createGhost = function(){
  ghost = Game.add.sprite(50, 80, 'ghost')
  ghost.animations.add ("right", [0, 1, 2, 3, 4, 5], 10, true)
  ghost.animations.add ("left", [6, 7, 8, 9, 10, 11], 10, true)
  ghost.anchor.setTo(0.5)
  ghost.scale.setTo(0.7)
} 




const moveGhost = function(){
  
    if (Game.input.keyboard.createCursorKeys().left.isDown) {
        ghost.x -=2
        ghost.animations.play('left')
    }
    else if (Game.input.keyboard.createCursorKeys().right.isDown) {
     ghost.x +=2
     ghost.animations.play('right')
     } else {
         ghost.frame = 4
     }
 
     if (Game.input.keyboard.createCursorKeys().up.isDown) {
         ghost.y -=2
    }
 
     if (Game.input.keyboard.createCursorKeys().down.isDown) {
         ghost.y +=2
    }
    
}
const sblusuk1 = function(){
   if(ghost.y<arrow1.y+10&&ghost.y<arrow1.y-10){
       if(ghost.x < arrow1.x + 10 && ghost.x < arrow1.x-10) {
      Game.stage.backgroundColor = Phaser.Color.getRandomColor(0, 255, 255) 
        }
    } 
}

const sblusuk2 = function(){
    if(ghost.y<arrow4.y+20&&ghost.y<arrow4.y-20){
        if(ghost.x<arrow4.x+20&&ghost.x<arrow4.x-20) {
           ghost.scale.setTo(0.5)
        }
    }

}

const sblusuk3 = function(){
    if(ghost.y<arrow3.y+20&&ghost.y<arrow3.y-20){
        if(ghost.x<arrow3.x+20&&ghost.x<arrow3.x-20) {
            ghost.scale.setTo(0.0)
        }
    }

}

const sblusuk4 = function(){
    if(ghost.y<arrow2.y+20&&ghost.y<arrow2.y-20){
        if(ghost.x<arrow2.x+20&&ghost.x<arrow2.x-20) {
            
        }
    }

}