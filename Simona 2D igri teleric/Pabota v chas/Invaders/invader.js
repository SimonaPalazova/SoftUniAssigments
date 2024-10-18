const Game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload, create, update });

let starfield
let bullets,enemyBullet, player, aliens
let scoreText, stateText, lives
let explosion, cursors, fireButton
let score = 0;
let firingTimer = 0;
let livingEnemies = [];
let bulletTime = 0;
let scoreString = ' '

function preload() {
    Game.load.image('bullet', 'bullet.png');
    Game.load.image('enemyBullet', 'enemy-bullet.png');
    Game.load.spritesheet('invader', 'invader32x32x4.png', 32, 32);
    Game.load.image('ship', 'ship.png');
    Game.load.spritesheet('expl', 'explode.png', 128, 128);
    Game.load.image('starfield', 'starfield.png');
}

function create() {
    //разрешаване на физика за всички с метода starSystem
    Game.physics.startSystem(Phaser.Physics.ARCADE);
    starfield = Game.add.tileSprite(0, 0, 800, 600, 'starfield');

    createBullets()
    createEnemiBullets()
    createPlayer()
    
    aliens = Game.add.group();
    aliens.enableBody = true;
    aliens.physicsBodyType = Phaser.Physics.ARCADE;
    
    scoreString = 'Score : ';
    scoreText = Game.add.text(10, 10, scoreString + score, { font: '34px Arial', fill: '#fff' });

    stateText = Game.add.text(Game.world.centerX,Game.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
    stateText.anchor.setTo(0.5, 0.5);
    stateText.visible = false;

    //създаваме група за животите
    lives = Game.add.group();
    //създаване на текста за изписване на животите
    Game.add.text(Game.world.width - 100, 10, 'Lives : ', { font: '34px Arial', fill: '#fff' });
    // създаваме 3-те живота
    for (let i = 0; i < 3; i++) 
    {
        let ship = lives.create(Game.world.width - 100 + (30 * i), 60, 'ship');
        ship.anchor.setTo(0.5, 0.5);
        ship.angle = 90; //завъртане
        ship.alpha = 0.5;  //прозрачност   
        ship.scale.setTo(0.2)
    }
    // създаваме група за експлозиатя
    explosions = Game.add.group();
    explosions.createMultiple(30, 'expl');
    explosions.forEach(setupInvader, this); // да се задейства за всеки нашественик

    cursors = Game.input.keyboard.createCursorKeys();
    // бутона, с който ще стреляме
    fireButton = Game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    createAliens()

}
function update(){
    //движение за backgrounda
    starfield.tilePosition.y += 2;
    movePlayer()

    Game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this)
    Game.physics.arcade.overlap(enemyBullets,player, enemyHitsPlayer, null, this)


}
function createBullets(){
    bullets = Game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(30, 'bullet');
}
function createEnemiBullets(){
    enemyBullets = Game.add.group();
    enemyBullets.enableBody = true;
    enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
    enemyBullets.createMultiple(30, 'enemyBullet');
}
function createPlayer(){
    player = Game.add.sprite(400, 500, 'ship');
    player.anchor.setTo(0.5, 0.5);
    player.scale.setTo(0.4)
    Game.physics.enable(player, Phaser.Physics.ARCADE);
}
 function movePlayer(){
    if (player.alive)
    {
        player.body.velocity.setTo(0, 0);
        if (cursors.left.isDown)
        {
            player.body.velocity.x = -200;
        }
        else if (cursors.right.isDown)
        {
            player.body.velocity.x = 200;
        }
    }
    if (fireButton.isDown)
    {
        fireBullet();
    }

    if (Game.time.now > firingTimer)
    {
        enemyFires();
    }
}
// функция за експлозията
function setupInvader (invader) {
    invader.anchor.x = 0.5;
    invader.anchor.y = 0.5;
    invader.animations.add('expl');
}

// функция за изстрелване на куршумите, които убиват Player - а
// тя се изпълнява, когато е натиснат SPACEBAR
function enemyFires () {

    enemyBullet = enemyBullets.getFirstExists(false);
 
     livingEnemies.length=0;
 
     aliens.forEachAlive(function(alien){
 
     livingEnemies.push(alien);
     });
 
     if (enemyBullet && livingEnemies.length > 0)
     {
         
     let random=Game.rnd.integerInRange(0,livingEnemies.length-1);
 
     let shooter=livingEnemies[random]; //съхраняват се в масив
         enemyBullet.reset(shooter.body.x, shooter.body.y);
 
         Game.physics.arcade.moveToObject(enemyBullet,player,120);
         firingTimer = Game.time.now + 2000;
     }
 
 }
 // функция за изстрелване на куршумите, които убиват извънземни
 // тя се изпълнява, когато е натиснат SPACEBAR
 function fireBullet () {
 
      if (Game.time.now > bulletTime)
     {
         bullet = bullets.getFirstExists(false);
 
         if (bullet)
         {
         
             bullet.reset(player.x, player.y + 8);
             bullet.body.velocity.y = -400;
             bulletTime = Game.time.now + 200;
         }
     }
 
 }
function createAliens(){
    for(let y=0; y<4; y++){
        for(let x=0; y<10; x++){
            let alien = aliens.create(x*48, y*50, 'invader')
            alien.anchor.setTo(0.5)
            alien.animations.add('',[0, 1, 2, 3], 20, true).play()
            alien.body.movies = false
        }
    }

    aliens.x = 100
    aliens.y = 50

    let tween = Game.add.tween(aliens).to({x:200}, 2000,
         Phaser.Easing.Linear.None, true, 0, 100, true) 
         tween.onLoop.add(descend, this)
}

function descend(){
 aliens.y+=10
}

function collisionHandler(bulet, alien){
    bulet.kill()
    alien.kill()

    score += 20
    scoreText.text = scoreString + score

    let explosion = explosions.getFirstExists(false)

    explosion.reset(alien.body.x, alien.body.y)
    explosion.play('expl', 30, false, true)

    if(alien.countLiving == 0)
    {
        score += 1000
        scoreText.text = scoreString + score
        enemyBullet.callAll('kill', this)

        stateText.text = 'You Won \n Click to start!'

        Game.input.onTap.addOnce(restart, this)
    }
}

function enemyHitsPlayer(player, bullet){
    bullet.kill()
    live = lives.getFirstAlive()
    if(live){
        live.kill()
    }
    let explosion = explosions.getFirstExists(false)

    explosion.reset(player.body.x, player.body.y)
    explosion.play('expl', 30, false, true)

   if(lives.countLiving()<1)
   {
       player.kill()
       enemyBullets.callAll('kill')

       stateText.text = 'GAME OVER! \n Cick to restart!'
       stateText.visible = true

       Game.input.onTap.addOnce(restart, this)
   }
}

function restart(){
    lives.callAll('revive')
    aliens.removeAll()
    createAliens()

    player.revive()
    stateText.visible= false

    score = 0
    scoreText.text = scoreString + score
}