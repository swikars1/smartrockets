var population;
var fitt;
// Each rocket is alive till 400 frames
var lifespan = 400;
// Made to display count on screen
var lifeP;
// Keeps track of frames
var count = 0;
var genn = 0;
// Where rockets are trying to go
var target;
// Max force applied to rocket
var maxforce = 0.2;

// Dimensions of barrier
var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10;

var img;


function setup() {
  createCanvas(500,500);
  population = new Population();
  rocket = new Rocket();

  target = createVector(width / 2, 50);


}

function draw() {
  background(0);
  population.run();
  // Displays count to window

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();

    count = 0;
    genn++;
  }
  text("Generation: " + genn, 90, 10);
  text("Final Fitness: " + population.lastfit, 90, 25);

  // Renders barrier for rockets
  fill(255);
  rect(rx, ry, rw, rh);
  // Renders target
  ellipse(target.x, target.y, 16, 16);
}       
