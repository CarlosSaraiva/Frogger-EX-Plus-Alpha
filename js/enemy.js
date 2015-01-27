// Enemies our player must avoid
var Enemy = function(grid, position) {
    //Calling Entity class
    Entity.call(this, grid,'images/enemy-bug.png', position)
}
Enemy.prototype = Object.create(Entity.prototype);
Enemy.prototype.constructor = Enemy;
Enemy.prototype.spawn = function(){
  
}

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.grid.position[this.entityPosition.x][this.entityPosition.y].x++ * 40;

}