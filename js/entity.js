//Superclass Entity wich will be common in Enemy and PLayer
var Entity = function(position, sprite) {
    this.position = position;
    this.sprite = sprite;
}

// Draw the enemy on the screen, required method for game
Entity.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.position.x, this.position.y);
}