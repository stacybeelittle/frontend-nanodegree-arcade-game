// Enemies our player must avoid
const Enemy = function(x, y, speed) {
    this.x = 0;
    this.y = y + 55;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.step = 101;
    this.boundary = this.step * 5;
    this.resetPosition = this.x;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < this.boundary) {
        //moves bugz
        this.x += this.speed * dt;
    } else {
        this.x = this.resetPosition;
    }
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
            if (this.x > 0){
                this.x -= this.step;
                }
                break;
            case 'up':
            if (this.y > 0){
                this.y -= this.jump;
                }
                break;
            case 'right':
            if (this.x < this.step * 4){
                this.x += this.step;
                }
                break;
            case 'down':
            if (this.y < this.jump *4){
                this.y += this.jump;
                }
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

const bug1 = new Enemy(-101, 0, 200);
const bug2 = new Enemy(-101, 85, 140);
const bug3 = new Enemy(-101, 175, 90);
const bug4 = new Enemy((bug3*2.5), 190, 30);

// Place all enemy objects in an array called allEnemies

const allEnemies = [];
allEnemies.push(bug1, bug2,bug3, bug4);
console.log(allEnemies);

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
