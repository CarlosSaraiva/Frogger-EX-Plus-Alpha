// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var grid = new Grid(6, 5);
var allEnemies = [];
// allEnemies[0] = new Enemy(grid, new GridPosition(1,0);
// allEnemies[1] = new Enemy(grid, new GridPosition(2,0));
// allEnemies[3] = new Enemy(grid, new GridPosition(3, 0));
var player = new Player(new GridPosition(0, 0), grid);
var collision = new Collision(player, allEnemies);

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