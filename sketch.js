// Mehul Ahuja 
// Langton Ant Simulation 


// Global variables
var COLS, ROWS;
var CELL_SIZE = 5;
var WIN_WIDTH = 400;
var WIN_HEIGHT = 400;
var GRID = [];

// a new ant is born 
var ant = new Ant(32, 40);

// Store the current direction of ant 
var cur_dir = 'UP';

function setup() {
  createCanvas(WIN_WIDTH, WIN_HEIGHT)  
  COLS = floor(width/CELL_SIZE);
  ROWS = floor(height/CELL_SIZE);
  // make it a 2d array 
  for(var k = 0; k < ROWS; k++){
    GRID.push([]);
  }
  for(var i = 0; i < ROWS; i++){
    for(var j = 0; j < COLS; j++){
      var cell = new Cell(i, j);
      GRID[i].push(cell);
    }
  }
  
}

function draw() {
  background(51)
  var moved = false;
  for(var i = 0; i < ROWS; i++){
    for(var j = 0; j < COLS; j++){
      if (i == ant.i && j == ant.j && !moved){
        moved = true;
        GRID[i][j].clr = 1 - GRID[i][j].clr;
        if(ant.cur_dir == 'UP'){
          if(isSafe(i, j+1) && GRID[i][j].clr === 1){
            // move right 
            ant.moveAnt('RIGHT');
          }else if(isSafe(i, j-1)){
              //move left 
            ant.moveAnt('LEFT');
          } 
        }
          
        else if(ant.cur_dir == 'DOWN'){
          if(isSafe(i, j-1) && GRID[i][j].clr === 1){
            // move right 
            ant.moveAnt('LEFT');
          }else if(isSafe(i, j+1)){
              //move left 
            ant.moveAnt('RIGHT');
          }
        }else if(ant.cur_dir == 'RIGHT'){
          if(isSafe(i+1, j) && GRID[i][j].clr === 1){
            // move right 
            ant.moveAnt('DOWN');
          }else if(isSafe(i-1, j)){
              //move left 
            ant.moveAnt('UP');
          }
        }else if(ant.cur_dir == 'LEFT'){
          if(isSafe(i-1, j) && GRID[i][j].clr === 1){
            // move right 
            ant.moveAnt('UP');
          }else if(isSafe(i+1, j)){
              //move left 
            ant.moveAnt('DOWN');
          }
        }
      }
      GRID[i][j].show();

    }
  }
}

// function to check the boundaries 
function isSafe(i, j){
  if(i < ROWS && i >= 0 && j < COLS && j >=0)
    return true;
  return false;  
}

// constructor for the ant 
function Ant(i, j){
  // current locationa and direction of ant
  this.i = i;
  this.j = j;
  this.cur_dir = 'DOWN';

  this.updateLocation = function(i, j){
    this.i = i;
    this.j = j;
  };
  this.updateDirection = function(new_dir){
    this.cur_dir = new_dir;
  };
  this.moveAnt = function(dir){
    if(dir == 'UP'){
      this.i = this.i - 1;
      this.cur_dir = 'UP';
    }
    if(dir == 'DOWN'){
      this.i = this.i + 1;
      this.cur_dir = 'DOWN';
    }
    if(dir == 'RIGHT'){
      this.j = this.j + 1;
      this.cur_dir = 'RIGHT';
    }
    if(dir == 'LEFT'){
      this.j = this.j - 1;
      this.cur_dir = 'LEFT';
    }
    
  }
}

// constructor for a single cell 
function Cell(i, j){
  this.i = i;
  this.j = j;
  // 0 -> on, 1 ->off 
  this.clr = 0;
  
  this.show = function(){
    var x = this.j * CELL_SIZE;
    var y = this.i * CELL_SIZE;
    stroke(255);
    if(this.clr === 0){
      noFill();
    }else{
      fill(255, 204, 0);
    }
    rect(x, y, CELL_SIZE, CELL_SIZE)
  };
  
}

