var Enemy = function(x, y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

Enemy.prototype.update = function(dt) {
    if(this.x < 500){
      this.x = this.x + (dt * 100) * this.speed;
    } else {
      this.x = -100;
    }

    if(playerPosition.x > this.x && playerPosition.x <= this.x + 100 && playerPosition.y <= this.y && playerPosition.y >= this.y - 40) {
      player.collision();
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x, y) {
  this.sprite = 'images/char-boy.png';
  this.x = x;
  this.y = y;
};

Player.prototype.update = function(dt) {

};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(input) {

  if(input == 'left' && this.x > 0){
    this.x -= 100;
  } else if(input == 'right' && this.x < 400) {
    this.x += 100;
  } else if(input == 'up' && this.y === 20){
    this.y = 420;
  } else if(input == 'down' && this.y < 420) {
    this.y += 100;
  } else if(input == 'up') {
    this.y -= 100;
  } else {

  }
  playerPosition.x = this.x;
  playerPosition.y = this.y;
};

Player.prototype.collision = function() {
  this.x = 200;
  this.y = 420;
};

var allEnemies = [];
var playerPosition = {};

allEnemies.push(new Enemy(0, 60, 4));
allEnemies.push(new Enemy(270, 145, 2.3));
allEnemies.push(new Enemy(0, 145, 3));
allEnemies.push(new Enemy(70, 220, 2));
allEnemies.push(new Enemy(0, 320, 1));
allEnemies.push(new Enemy(260, 320, 1.6));

var player = new Player(200, 420);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
