var xoff = 0.0;
var xincrement = 0.01;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    noStroke();
}

function draw() {
    // Create an alpha blended background
    fill(0,10);
    rect(0,0,width,height);
    
    // var n = random(0, width); // try this line instead of noise
    
    // Get a noise value on xoff and scale 
    // it according to the window's width
    var n = noise(xoff)*width;
    
    // with each cycle, increment xoff
    xoff += xincrement;
    
    // draw the ellipse at the value produced by perlin noise 
    fill(400);
    ellipse(n, height/2, 64, 64);
}
