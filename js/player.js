var Player = function(grid) {
    Entity.call(this, new PVector(0, 0), 'images/char-boy.png', grid);
}
Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;

Player.prototype.handleInput = function(key) {
    switch (key) {
        case 'right':
            this.entityPosition.y++;

            break;
        case 'left':
            this.entityPosition.y--;
            break;

        case 'up':
            this.entityPosition.x--;
            break;

        case 'down':
            this.entityPosition.x++;
            break;
    }
    this.limitBorders();
}

Player.prototype.limitBorders = function() {
    if (this.entityPosition.x > this.grid.cols - 1) {
        this.entityPosition.x = this.grid.cols - 1;
    } else if (this.entityPosition.x < 0) {
        this.entityPosition.x = 0;
    }

    if (this.entityPosition.y > this.grid.rows - 1) {
        this.entityPosition.y = this.grid.rows - 1;
    } else if (this.entityPosition.y < 0) {
        this.entityPosition.y = 0;
    }   
    console.log(this.entityPosition);
}

Player.prototype.checkCollision = function() {

}

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

}
