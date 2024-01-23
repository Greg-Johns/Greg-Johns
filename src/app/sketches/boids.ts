import { type Sketch } from "@p5-wrapper/react";

const width = 640;
const height = 640;

const sketch: Sketch = (p5) => {
  // Boid class
  // From Daniel Shiffman's 'The Nature of Code'
  // http://natureofcode.com
  // Methods for Separation, Cohesion, Alignment added
  class Boid {
    acceleration = p5.createVector(0, 0);
    velocity = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
    x: number;
    y: number;
    boids: Boid[];
    position: any;

    constructor(x: number, y: number) {
      this.acceleration = this.acceleration;
      this.velocity = this.velocity;
      this.x = x;
      this.y = y;
      this.position = p5.createVector(this.x, this.y);
      this.boids = []; // Initialize the array
    }

    r = 9.0;
    maxspeed = 4;    // Maximum speed
    maxforce = 0.5; // Maximum steering force 

    run(boids: Boid[]) {
      this.flock(boids);
      this.update();
      this.borders();
      this.render();
    }

    applyForce(force: any) {
      // We could add mass here if we want A = F / M
      this.acceleration.add(force);
    }
  
    // We accumulate a new acceleration each time based on three rules
    flock(boids: any) {
      let sep = this.separate(boids);   // Separation
      let ali = this.align(boids);      // Alignment
      let coh = this.cohesion(boids);   // Cohesion
      // Arbitrarily weight these forces
      sep.mult(1.4);
      ali.mult(1.2);
      coh.mult(6);
      // Add the force vectors to acceleration
      this.applyForce(sep);
      this.applyForce(ali);
      this.applyForce(coh);
    }
  
    // Method to update location
    update() {
      // Update velocity
      this.velocity.add(this.acceleration);
      // Limit speed
      this.velocity.limit(this.maxspeed);
      this.position.add(this.velocity);
      // Reset accelertion to 0 each cycle
      this.acceleration.mult(0);
    }
  
    // A method that calculates and applies a steering force towards a target
    // STEER = DESIRED MINUS VELOCITY
    seek(target: any) {
      //let desired = p5.Vector.sub(target,this.position);  // A vector pointing from the location to the target
      // let desired = p5.createVector((this.position.x - target.x), (this.position.y - target.y));  // A vector pointing from the location to the target
      let desired = p5.createVector((target.x - this.position.x), (target.y - this.position.y));  // A vector pointing from the location to the target
      // Normalize desired and scale to maximum speed
      desired.normalize();
      desired.mult(this.maxspeed);
      // Steering = Desired minus Velocity
      // let steer = p5.Vector.sub(desired,this.velocity);
      let steer = p5.createVector((this.velocity.x - desired.x), (this.velocity.y - desired.y));
      // let steer = p5.createVector(( desired.x -this.velocity.x), (desired.y - this.velocity.y));
      steer.limit(this.maxforce);  // Limit to maximum steering force
      return steer;
    }

    // Wraparound
    borders() {
      if (this.position.x < -this.r)  this.position.x = width + this.r;
      if (this.position.y < -this.r)  this.position.y = height + this.r;
      if (this.position.x > width + this.r) this.position.x = -this.r;
      if (this.position.y > height + this.r) this.position.y = -this.r;
    }
  
    render() {
      // Draw a triangle rotated in the direction of velocity
      let theta = this.velocity.heading() + p5.radians(90);
      const int = theta * 2;
      p5.fill(int * 40);
      p5.stroke(int * 40);
      p5.strokeWeight(int);
      p5.point(this.position.x, this.position.y);
      // p5.push();
      // p5.translate(this.position.x, this.position.y);
      // p5.rotate(theta);
      // p5.beginShape();
      // p5.vertex(0, -this.r);
      // p5.vertex(-this.r, this.r);
      // p5.vertex(this.r, this.r);
      // p5.endShape();
      // p5.pop();
    }
  
    // Separation
    // Method checks for nearby boids and steers away
    separate(boids: any) {
      let desiredseparation = 25.0;
      let steer = p5.createVector(0, 0);
      let count = 0;
      // For every boid in the system, check if it's too close
      for (let i = 0; i < boids.length; i++) {
        let d = p5.dist(this.position.x, this.position.y, boids[i].position.x, boids[i].position.y);
        // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
        if ((d > 0) && (d < desiredseparation)) {
          // Calculate vector pointing away from neighbor
          // let diff = p5.Vector.sub(this.position, boids[i].position);
          let diff = p5.createVector((boids[i].position.x - this.position.x), (this.position.y - boids[i].position.y));
          diff.normalize();
          diff.div(d);        // Weight by distance
          steer.add(diff);
          count++;            // Keep track of how many
        }
      }
      // Average -- divide by how many
      if (count > 0) {
        steer.div(count);
      }

      // As long as the vector is greater than 0
      if (steer.mag() > 0) {
        // Implement Reynolds: Steering = Desired - Velocity
        steer.normalize();
        steer.mult(this.maxspeed);
        steer.sub(this.velocity);
        steer.limit(this.maxforce);
      }
      return steer;
    }
  
    // Alignment
    // For every nearby boid in the system, calculate the average velocity
    align(boids: any) {
      let neighbordist = 50;
      let sum = p5.createVector(0,0);
      let count = 0;
      for (let i = 0; i < boids.length; i++) {
        let d = p5.dist(this.position.x, this.position.y, boids[i].position.x, boids[i].position.y);
        if ((d > 0) && (d < neighbordist)) {
          sum.add(boids[i].velocity);
          count++;
        }
      }
      if (count > 0) {
        sum.div(count);
        sum.normalize();
        sum.mult(this.maxspeed);
        // let steer = p5.Vector.sub(sum, this.velocity);
        let steer = sum.sub(sum.x, this.velocity.x);
        steer.limit(this.maxforce);
        return steer;
      } else {
        return p5.createVector(0, 0);
      }
    }
  
    // Cohesion
    // For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
    cohesion(boids: any) {
      let neighbordist = 50;
      let sum = p5.createVector(0, 0);   // Start with empty vector to accumulate all locations
      let count = 0;
      for (let i = 0; i < boids.length; i++) {
        let d = p5.dist(this.position.x, this.position.y, boids[i].position.x, boids[i].position.y);
        if ((d > 0) && (d < neighbordist)) {
          sum.add(boids[i].position); // Add location
          count++;
        }
      }
      if (count > 0) {
        sum.div(count);
        return this.seek(sum);  // Steer towards the location
      } else {
        return p5.createVector(0, 0);
      }
    }
  }

  class Flock {
    public boids: Array<Boid>;
    constructor() {
      this.boids = [];
    }

    run() {
      for (let i = 0; i < this.boids.length; i++) {
        this.boids[i].run(this.boids);  // Passing the entire list of boids to each boid individually
      }
    }
    
    addBoid(b: Boid) {
      this.boids.push(b);
    }
  }

  let flock: Flock;
  flock = new Flock();

  p5.setup = () => {
    p5.createCanvas(width, height);
    for (let i = 0; i < 100; i++) {
      let b: Boid;
      b = new Boid(width / 2, height / 2);
      flock.addBoid(b);
    }
  }

  p5.draw = () => {
    // p5.background(51);
    flock.run();
  };
};

export default sketch;
