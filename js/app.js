// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x < 500){
      this.x = this.x + (dt * 100) * this.speed;
    } else {
      this.x = -100;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
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
    //do nothing
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];

//rows counted from the bottom
//bug on fifth row
allEnemies.push(new Enemy(0, 60, 4));
//bugs on the third
allEnemies.push(new Enemy(270, 145, 2.3));
allEnemies.push(new Enemy(0, 145, 3));
//bug on the second
allEnemies.push(new Enemy(70, 230, 2));
//bugs on the first row
allEnemies.push(new Enemy(0, 315, 1));
allEnemies.push(new Enemy(260, 315, 1.6));

var player = new Player(200, 420);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
