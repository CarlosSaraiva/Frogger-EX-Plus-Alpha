//Superclass Entity wich will be common in Enemy and PLayer
var Entity = function(entityPosition, sprite, grid) {
    this.grid = grid;
    this.entityPosition = entityPosition;
    this.sprite = sprite;
}

// Draw the enemy on the screen, required method for game
Entity.prototype.render = function() {
    var xl = this.grid.position[this.entityPosition.x][this.entityPosition.y].x;
    var yl = this.grid.position[this.entityPosition.x][this.entityPosition.y].y;
    ctx.drawImage(Resources.get(this.sprite), xl, yl);
}