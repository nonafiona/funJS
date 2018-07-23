function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  // put drawing code here
  if (mouseIsPressed) {
    fill(204, 0, 0);
    stroke(255);
  } else {
    fill(255);
    stroke(204, 0, 0);
  }
  ellipse(mouseX, mouseY, 80, 80);
}