let notes = [];
let currentId = 0;
let result = true;

function setup() {
  const bpm = 120;
  console.log('yo');
  createCanvas(2000, 720);

  setInterval(() => {
    notes.push(new Note(currentId));
    currentId++;
  }, 2000);
};

function draw() {
  background('darkblue');
  notes.forEach((note) => {
    if(note.radius < 450){
      note.draw();
    }
    
  });
  console.log(notes);
  stroke(0, 0, 255);
  strokeWeight(10);
  ellipse(400, 300, 350, 350);
};

function keyPressed() {
  if(keyCode === 32){
    let destroyNotes = [];
    notes.forEach((note) => {
      if(note.radius > 330 && note.radius < 360){
        console.log('hey');
        note.active = false;
      }
      
    });
    console.log(destroyNotes);
    if(destroyNotes.length > 0) {
      for(let i = 0; i < destroyNotes; i++) {
        delete destroyNotes.pop();
      }
    }
  }
};

class Note {
  constructor(noteId) {
    this.noteId = noteId;
    this.radius = 1;
    this.rate = 2;
    this.opacity = 255;
    this.destroyNextFrame = false;
    this.active = true;
  }

  draw(){
    if(this.active) {
      noFill();
      strokeWeight(5);
      stroke(255, 255, 255, this.opacity);
      ellipse(400, 300, this.radius, this.radius);
      this.radius += this.rate;
      if(this.radius > 350) {
        this.opacity -= 10;
      }
    }
  }

  fade() {
    setTimeout(() => {
    }, 3000);
  }
}