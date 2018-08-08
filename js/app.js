

// Enemies our player must avoid
const Enemy = function(x, y, speed) {
    this.x = 0;
    this.y = y + 55;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.step = 50;
    this.boundary = this.step * 10;
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
        //resets bug position to beginning of row
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
        this.startY = (this.jump * 4) + 54;
        this.x = this.startX;
        this.y = this.startY;
        this.winner = false;
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
    update() {
        //check collision status
        for(let enemy of allEnemies){
            //check to see if player is in same position as an enemy
            if(this.y === enemy.y && (enemy.x + enemy.step/2 > this.x && enemy.x < this.x + this.step/2) ) {
                this.reset();
            }
        }
        if(this.y === -29 && this.x === 303){
            this.winner = true;
        }else if 
            (this.y === -29 && this.x != 303){
                this.reset();
            
        }

}

    reset(){
        //sets GGPlayer back to starting x,y coordinates
        this.y = this.startY;
        this.x = this.startX;
    }

}



const Finish = function() {
    this.x = 303;
    this.y = -29;
    this.sprite = 'images/Rock.png';
    };
    Finish.prototype.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };


    //function to toggle modals on and off
function toggleModal() {
    const modal = document.querySelector('.modal_1');
    modal.classList.toggle('hide');
        }

        

    //initializes new objects

const rock = new Finish();
const player = new GGPlayer();
const bug1 = new Enemy(-101, -1, 200);
const bug2 = new Enemy(-101, 82, 140);
const bug3 = new Enemy(-101, 165, 90);
const bug4 = new Enemy((bug3*2.5), 165, 35);
const allEnemies = [];
allEnemies.push(bug1, bug2, bug3, bug4);

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
