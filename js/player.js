var Player = function(entityPosition, grid) {
    Entity.call(this, entityPosition, 'images/char-boy.png', grid);
}
Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;

Player.prototype.handleInput = function(key) {
    switch (key) {
        case 'right':
            this.entityPosition.col++;

            break;
        case 'left':
            this.entityPosition.col--;
            break;

        case 'up':
            this.entityPosition.row--;
            break;

        case 'down':
            this.entityPosition.row++;
            break;
    }
    this.limitBorders();
}

Player.prototype.limitBorders = function() {
    if (this.entityPosition.col > this.grid.cols - 1) {
        this.entityPosition.col = this.grid.cols - 1;
    } else if (this.entityPosition.col < 0) {
        this.entityPosition.col = 0;
    }

    if (this.entityPosition.row > this.grid.rows - 1) {
        this.entityPosition.row = this.grid.rows - 1;
    } else if (this.entityPosition.row < 0) {
        this.entityPosition.row = 0;
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
