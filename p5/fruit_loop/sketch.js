function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

function draw() {
    background('#ffd6f2');
    
    translate(0,0,0);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.05);
    rotateX(frameCount * 0.05);
    rotateY(frameCount * 0.05);
    torus(200, 40);
    pop();
    
    translate(0,0,0);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.05);
    rotateX(frameCount * 0.05);
    rotateY(frameCount * 0.05);
    torus(300, 40);
    pop();
    
    translate(0, 0, 0);
    push();
    rotateZ(frameCount * 0.05);
    rotateX(frameCount * 0.05);
    rotateY(frameCount * 0.05);
    sphere(70);
    pop();
    
}