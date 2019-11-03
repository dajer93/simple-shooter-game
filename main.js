import * as p5 from 'p5';

let s = (sk) => {    
  sk.setup = () => {
    sk.createCanvas(400, 400);
    sk.background(40);
    sk.stroke(200);
    sk.strokeWeight(3);
  }

  sk.draw = () => {
    sk.background(220);
  }
}

const P5 = new p5(s);