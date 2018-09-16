function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(102);
}

function draw() {
  stroke(255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}