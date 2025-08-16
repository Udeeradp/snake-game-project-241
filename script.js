var snake_x, snake_y; // snake position
var snake_xspeed, snake_yspeed; // snake speed
var scl = 10; // scale for the snake and food size
var food;  // food position
var snake_tail = []; //snake tail position
var snake_total = 0; // snake length
var scoreVal = 0; //score

function setup() {
  createCanvas(1200, 600);
  snake_x = width / 2;
  snake_y = height / 2;
  snake_xspeed = 1;
  snake_yspeed = 0;
  
  var foodXPos = random(0, width - scl);
  var foodYPos = random(0, height - scl);
  food = [floor(foodXPos / scl) * scl, floor(foodYPos / scl) * scl];
}

function draw() {
  background(220);
  
  // update snake position
  updateSnake();
  
  // check if snake eats food
  if (eat()){
    snake_total++;
    scoreVal++;
    spawnFood();
  }
  
  // draw snake tail
  for (var i = 0; i < snake_tail.length; i++){
    fill(0);
    rect(snake_tail[i].x, snake_tail[i].y, scl, scl);
  }
  
  // draw snake head
  fill(0);
  rect(snake_x, snake_y, scl, scl);
  
  // draw food
  fill(255, 0, 0);
  rect(food[0], food[1], scl, scl);
  
  // display score
  fill(0);
  textSize(24);
  text("Score: " + scoreVal, 10, 30);
}

function updateSnake(){
  // update tail
  if (snake_total === snake_tail.length){
    for (let i = 0; i < snake_tail.length - 1; i++){
      snake_tail[i] = snake_tail[i + 1];
    }
  }
  
  // add current head to tail
  if (snake_total > 0){
    snake_tail[snake_total - 1] = createVector(snake_x, snake_y);
  }
  
  // update head
  snake_x += snake_xspeed * scl;
  snake_y += snake_yspeed * scl;
}

function eat(){
  var d = dist(snake_x, snake_y, food[0], food[1]);
  if (d < scl){
    return true;
  } else {
    return false;
  }
}

function spawnFood(){
  var foodXPos = random(0, width - scl);
  var foodYPos = random(0, height - scl);
  food = [floor(foodXPos / scl) * scl, floor(foodYPos / scl) * scl];
}

function keyPressed() {
  if (keyCode === UP_ARROW && snake_yspeed === 0) {
    snake_xspeed = 0;
    snake_yspeed = -1;
  } else if (keyCode === DOWN_ARROW && snake_yspeed === 0) {
    snake_xspeed = 0;
    snake_yspeed = 1;
  } else if (keyCode === RIGHT_ARROW && snake_xspeed === 0) {
    snake_xspeed = 1;
    snake_yspeed = 0;
  } else if (keyCode === LEFT_ARROW && snake_xspeed === 0) {
    snake_xspeed = -1;
    snake_yspeed = 0;
  }
}
