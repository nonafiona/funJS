function setup(){
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

function draw(){
    background('#ffd6f2');
    rotateY(frameCount * 0.01);
    normalMaterial();

    for(var j = 0; j < 5; j++){
        push();
        for(var i = 0; i < 80; i++){
            translate(sin(frameCount * 0.001 + j) * 100, sin(frameCount * 0.001 + j) * 100, i * 0.1);
            rotateZ(frameCount * 0.002);
            push();
            sphere(8, 6, 4); 
            pop();
        }
        pop();
    }
}