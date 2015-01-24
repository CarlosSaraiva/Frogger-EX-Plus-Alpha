// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    //Calling Entity class
    this.speed = speed;
    Entity.call(this, x, y, 'images/enemy-bug.png')
}
Enemy.prototype = Object.create(Entity.prototype);
Enemy.prototype.constructor = Enemy;
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x;
    this.y;
}