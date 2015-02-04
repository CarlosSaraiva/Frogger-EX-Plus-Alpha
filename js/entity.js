//Superclass Entity wich will be common in Enemy and PLayer
var Entity = function(entityPosition, sprite, grid) {
    this.grid = grid;
    this.entityPosition = entityPosition;
    this.sprite = sprite;
    this.x;
    this.y;
}
Entity.prototype.getEntityPosition = function(){
  return this.entityPosition;
}

// Draw the enemy on the screen, required method for game
Entity.prototype.render = function() {
    this.x = this.grid.getAbsolutePosition(this.entityPosition.row, this.entityPosition.col).x;
    this.y = this.grid.getAbsolutePosition(this.entityPosition.row, this.entityPosition.col).y;
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}