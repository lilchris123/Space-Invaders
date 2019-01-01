var fighter;
var enemies = [];
var lasers=[];

function setup() {
  // put setup code here
    createCanvas(600, 400);
    fighter = new Fighter();
    for(var i=0; i<6; i++){
        enemies[i]= new Enemy(i*100,60);
    }
}

function draw() {
  // put drawing code here
    background(50);
    fighter.show();
    for(var i=0; i<lasers.length; i++){
        lasers[i].show();
        lasers[i].move();
    }
    for(var i=0; i<enemies.length; i++){
        enemies[i].show();
    }
}

function keyPressed()
{
    if(key === ' '){
        var laser= new Laser(fighter.x,height);
        lasers.push(laser);
    }
    if (keyCode === RIGHT_ARROW)
        fighter.move(1);
    else if (keyCode === LEFT_ARROW)
        fighter.move(-1);
}