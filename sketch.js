// Mehul Ahuja 
// Langton Ant Simulation 


// Global variables
var COLS, ROWS;
var CELL_SIZE = 40;
var GRID = [];

function setup() {
  createCanvas(400, 400)  
  COLS = floor(width/CELL_SIZE);
  ROWS = floor(height/CELL_SIZE);
  
  for(var i = 0; i < ROWS; i++){
    for(var j = 0; j < COLS; j++){
      var cell = new Cell(i, j);
      GRID.push(cell);
    }
  }
}

function draw() {
  background(51)
  
  for(var i = 0; i < GRID.length; i++){
    
    GRID[i].show();
    if (i == 2){
      GRID[i].negateColor(); 
      noFill();
      stroke(255)
    }
  }
}

// constructor for a single cell 
function Cell(i, j){
  this.i = i;
  this.j = j;
  
  this.show = function(){
    var x = this.i * CELL_SIZE;
    var y = this.j * CELL_SIZE;
    stroke(255);
    noFill();
    rect(x, y, CELL_SIZE, CELL_SIZE)
  };
  
  this.negateColor = function(){
    var x = this.i * CELL_SIZE;
    var y = this.j * CELL_SIZE;
    fill(255, 204, 0);
    rect(x, y, CELL_SIZE, CELL_SIZE);
  };
}

