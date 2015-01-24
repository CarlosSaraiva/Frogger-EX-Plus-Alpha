var Player = function(position, grid) {
    this.grid = grid;
    this.playerPosition = new PVector(position.x, position.y);
    this.lastPosition;
    Entity.call(this, position, 'images/char-boy.png')
}
Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;
Player.prototype.handleInput = function(key) {
    switch (key) {
        case 'right':
            this.playerPosition.x++;

            break;
        case 'left':
            this.playerPosition.x--;
            break;

        case 'up':
            this.playerPosition.y--;
            break;

        case 'down':
            this.playerPosition.y++;
            break;
    }
    this.checkBorders();
}

Player.prototype.checkBorders = function() {
    if (this.playerPosition.x > this.grid.position.length - 1) {
        this.playerPosition.x = this.grid.position.length - 1;
        console.log(this.playerPosition.x);
    } else if (this.playerPosition.x < 0) {
        this.playerPosition.x = 0;
    }

    if (this.playerPosition.y > this.grid.position.length) {
        this.playerPosition.y = this.grid.position.length
    } else if (this.playerPosition.y < 0) {
        this.playerPosition.y = 0;
    }

    this.position = this.grid.position[this.playerPosition.x][this.playerPosition.y];
}

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x;
    this.y;
}
