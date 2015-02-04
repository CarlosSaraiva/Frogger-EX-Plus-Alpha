var Grid = function(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.position = new Array();
    this.coordenates;  //cols * 101, row * 83

    for (var i = 0; i < this.rows; i++) {
        this.position[i] = new Array();
        for (var j = 0; j < this.cols; j++) {
            this.position[i][j] = new PVector(i * 101, j * 83);
        }
    }
}

Grid.prototype.getAbsolutePosition = function(row, column){
    return this.position[row][column];
}