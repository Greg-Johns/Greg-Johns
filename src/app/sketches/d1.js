let particles = [];

let Sketch = function(p) {

  class Particle {
    constructor(){
      this.x = p.random(0, p.width);
      this.y = p.random(0, p.height);
      this.r = p.random(1,8);
      this.xSpeed = p.random(-.2,1.2);
      this.ySpeed = p.random(-.1,1);
    }

  // creation of a particle.
    createParticle() {
      p.noStroke();
      p.fill('rgba(200, 200, 200, .4)');
      p.circle(this.x, this.y, this.r);
    }

  // setting the particle in motion.
    moveParticle() {
      if(this.x < 0 || this.x > p.width)
        this.xSpeed*=-1;
      if(this.y < 0 || this.y > p.height)
        this.ySpeed*=-1;
      this.x+=this.xSpeed;
      this.y+=this.ySpeed;
    }

    joinParticles(particles) {
      particles.forEach(element =>{
        let dis = p.dist(this.x,this.y,element.x,element.y);
        if(dis < 45) {
          p.stroke('rgba(255, 255, 255, 0.04)');
          p.line(this.x, this.y, element.x, element.y);
        }
      });
    }
  }

  p.setup = function() {
    let canvas = p.createCanvas(640, 400);
    canvas.parent('p5-wrapper');
    for(let i = 0; i < p.width/10;i++){
      particles.push(new Particle());
    }
  }

  p.draw = function() {
    p.background(50);
    for(let i = 0;i<particles.length;i++) {
      particles[i].createParticle();
      particles[i].moveParticle();
      particles[i].joinParticles(particles.slice(i));
    }
  }
}

export default Sketch

