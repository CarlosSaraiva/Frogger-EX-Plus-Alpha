var Player = function(grid) {
    Entity.call(this, new PVector(2, 5), 'images/char-boy.png', grid);
}
Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;
Player.prototype.handleInput = function(key) {
    switch (key) {
        case 'right':
            this.entityPosition.x++;

            break;
        case 'left':
            this.entityPosition.x--;
            break;

        case 'up':
            this.entityPosition.y--;
            break;

        case 'down':
            this.entityPosition.y++;
            break;
    }
    this.checkBorders();
}

Player.prototype.checkBorders = function() {
    if (this.entityPosition.x > this.grid.position.length - 1) {
        this.entityPosition.x = this.grid.position.length - 1;
        console.log(this.entityPosition.x);
    } else if (this.entityPosition.x < 0) {
        this.entityPosition.x = 0;
    }

    if (this.entityPosition.y > this.grid.position.length) {
        this.entityPosition.y = this.grid.position.length
    } else if (this.entityPosition.y < 0) {
        this.entityPosition.y = 0;
    }

    this.position = this.grid.position[this.entityPosition.x][this.entityPosition.y];
}

Player.prototype.checkCollision = function(){
    
}

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x;
    this.y;
}
