// Enemies our player must avoid
const Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class GGPlayer {
    constructor(){
        this.sprite = 'images/char-horn-girl.png';
        this.step = 101;
        this.jump = 83;
        this.startX = this.step *2 ;
        this.startY = (this.jump *5) -15;
        this.x = this.startX;
        this.y = this.startY;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    /** 
     * Update player's position
      * @param {string} input 
    */

    handleInput(input) {
        switch(input) {
            case 'left':
                this.x -= 20;
                break;
            case 'up':
                this.y -= 20;
                break;
            case 'right':
                this.x += 20;
                break;
            case 'down':
                this.y += 20;
                break;
        }

    }
}



GGPlayer.prototype.update = function(dt) {
//function for GGPlayer's movements
};

//Draws GoodGuyPlayer on the screen


//GGPlayer.prototype.handleInput = function(){
    //I think this is to handle which keys do what?
//};

// Now instantiate your objects.

//initializes new object

const player = new GGPlayer();

// Place all enemy objects in an array called allEnemies

const allEnemies = [];

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
