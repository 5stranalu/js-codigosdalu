function setup() {
    createCanvas(600, 600);
    background("lightgreen");
  }
  
  
  function draw() {
    
    stroke("grey");
    fill("white");
  
    // console.log(mouseIsPressed) ;
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 50);
    }
  }
  