let Sketch = function(p) {

  p.setup = function() {
    let canvas = p.createCanvas(640, 400);
    canvas.parent('p5-wrapper');
    p.background(50)
    p.noStroke();
    p.fill(255)
  }

  let xoff1 = 20;
  let xoff2 = 100;
  let inc = 0.01;
  /* let start = 0; */

  p.draw = function() {
    /* p.background(50) */
    /* p.stroke(255); */
    /* p.noFill(); */

    /* var xoff = start; */
    // tv static
    /* p.beginShape(); */
    /* for (var x = 0; x < p.width; x++) { */
    /*   p.stroke(250); */
    /*   p.point(x, p.random(p.height)) */
    /*   var y = p.noise(xoff) * p.height; */
    /*   p.vertex(x, y); */
    /*   p.vertex(x, p.random(p.height)) */
    /*   xoff += inc; */
    /* p.noiseDetail(p.random(inc, 10)) */
    /* } */
    /* p.endShape(); */

    // start += inc;

    var x = p.map(p.noise(xoff1), 0, 1, 0, p.width);
    var y = p.map(p.noise(xoff2), 0, 1, 0, p.height);
    xoff1 += 0.02;
    xoff2 += 0.01;
    
    p.ellipse(x,y,4,4);
    /* p.noloop(); */
  }
}

export default Sketch

