function cargarEscena(){
  //print(escenaActual);
  if(escenaActual < 31){
    cargarFondo(imagenes[escenaActual], 0, 0, width, height);
    cargarTexto(dialogos[escenaActual], 40, 390);
  }
  if (escenaActual==6 || escenaActual==12 || escenaActual==21){
    dibujarBoton(555, 325, 70, dialogos[42]);
    dibujarBoton(85, 325, 70, dialogos[43]);
  } else if (escenaActual==0) {
    dibujarBoton(330, 325, 70, dialogos[40]);
  } else if (escenaActual==31) {
    creditos();
    dibujarBoton(555, 370, 70, dialogos[44]);
  } else {
    dibujarBoton(555, 325, 70, dialogos[41]);
  }
}

function cargarFondo(img, posX, posY, ancho, alto){
  image(img, posX, posY, ancho, alto)
}

function cargarTexto(txt, posX, posY){
  fill(255, 200);
  rect(30, 370, 580, 100);
  textSize(13);
  fill(0);
  text(txt, posX, posY, 550)
}

function creditos(){
  push();
  fill(255);
  textSize(20);
  text(dialogos[50], 160, movimientoDeLosCreditos - 400);
  text(dialogos[51], 220, movimientoDeLosCreditos - 360);
  text(dialogos[52], 220, movimientoDeLosCreditos - 320);
  text(dialogos[53], 220, movimientoDeLosCreditos - 280);
  text(dialogos[54], 220, movimientoDeLosCreditos - 240);
  text(dialogos[55], 220, movimientoDeLosCreditos - 200);
  text(dialogos[56], 220, movimientoDeLosCreditos - 160);
  text(dialogos[57], 220, movimientoDeLosCreditos - 120);
  if (!sonidoReproducido){
    Sonidos[1].play();
    sonidoReproducido = true;
  }
  
  movimientoDeLosCreditos -= 1;
  if (movimientoDeLosCreditos < -200) {
    movimientoDeLosCreditos = 880;
  }
  pop();
}

function reiniciar(){
  Sonidos[1].stop();
  sonidoReproducido = false;
  movimientoDeLosCreditos = 880;
}
