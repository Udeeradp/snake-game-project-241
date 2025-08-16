var snake_x, snake_y; // snake position
var snake_xspeed, snake_yspeed; // snake speed
var scl = 10; // scale for the snake and food size
var food;  // food position

function setup() {
  createCanvas(1200, 600);
  snake_x = width / 2;
  snake_y = height / 2;
  snake_xspeed = 1;
  snake_yspeed = 0;
  
  var foodXPos = random(30, 770);
  var foodYPos = random(30, 470);
  food = [floor(foodXPos), floor(foodYPos)];
}

function draw() {
  background(220);
  
  // update snake position
  snake_x += snake_xspeed * scl;
  snake_y += snake_yspeed * scl;
  
  // draw snake 
  fill(0);
  rect(snake_x, snake_y, scl, scl);
  
  // draw food
  fill(255, 0, 0);
  rect(food[0], food[1], scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake_xspeed = 0;
    snake_yspeed = -1;
  } else if (keyCode === DOWN_ARROW) {
    snake_xspeed = 0;
    snake_yspeed = 1;
  } else if (keyCode === RIGHT_ARROW) {
    snake_xspeed = 1;
    snake_yspeed = 0;
  } else if (keyCode === LEFT_ARROW) {
    snake_xspeed = -1;
    snake_yspeed = 0;
  }
}
