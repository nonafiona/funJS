function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

function draw() {
    background('#ffd6f2');
    
    translate(0,0,0);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(100, 40);
    pop();
    
}