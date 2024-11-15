function dibujarBoton(posX, posY, ancho, txt){
  push();
  if(mouseSobreBoton(posX,posY, ancho)){
    fill(50,50,255);
  } else {
    fill(255);
  }
  circle(posX, posY, ancho);
  fill(0);
  textAlign(CENTER);
  text(txt, posX, posY + 5);
  pop();
}

function mouseSobreBoton(posX, posY, anchoBoton){
  return dist(mouseX, mouseY, posX, posY) < anchoBoton/2;
}

function mousePressed(){
  if (escenaActual == 6 || escenaActual == 12 || escenaActual == 21 || escenaActual == 26) {
    
    if (mouseSobreBoton(555, 325, 70)) {
      
      Sonidos[0].play();
      if(escenaActual == 26){
        escenaActual = 7;
      } else {
        escenaActual++;
      }
      
    } else if (mouseSobreBoton(85, 325, 70)) {
      
      Sonidos[0].play();
      if (escenaActual == 6) {
        escenaActual = 18;
      } else if (escenaActual == 12) {
        escenaActual = 27;                
      } else if (escenaActual == 21) {
        escenaActual = 26;
      }
    }
  } else if (escenaActual == 0) {
    if (mouseSobreBoton(320, 325, 70)) {
      Sonidos[0].play();
      escenaActual++;
    }
  } else if (escenaActual == 31) {
    if (mouseSobreBoton(555, 370, 70)) {
      Sonidos[0].play();
      escenaActual = 0;
      reiniciar();
    }
  } else if (escenaActual==17 || escenaActual==25){
    if (mouseSobreBoton(555, 325, 70)) {
      Sonidos[0].play();
      escenaActual = 31;
    }
  } else {
    if (mouseSobreBoton(555, 325, 70)) {
      Sonidos[0].play();
      escenaActual++;
    }
  } 
  
}
