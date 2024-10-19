//Trabajo Practico Final parte 1
//Comision 4
//Alumnos: Zuccato Manuel, Sutti Nicolas
//Docente: Leonardo Garay
//link del video: https://youtu.be/doSI_2mLdr8

let imagenes = []
let anchoPantalla = 640;
let altoPantalla = 480;
let dialogos;
let EscenaActual = 0;
let CantidadDeEscenas = 30;
let CantidadDeImg = 30;
let DiametroDelBoton = 50
let radioDelBoton = DiametroDelBoton / 2
let Sonido;
let EsPregunta = false;
let MovimientoDeLosCreditos = 900;


function preload(){
  for (let i = 0 ; i < CantidadDeImg ; i++){
    imagenes[i] = loadImage("data/img"+i+".jpg");
  }
  dialogos = loadStrings("data/dialogos.txt");
  soundFormats('mp3');
  Sonido = loadSound('data/sonido0.mp3');
}


function setup() {
  createCanvas(anchoPantalla, altoPantalla);
  textSize(16);
  textWrap(WORD);
}


function draw() {
  background(0);  
  Escenas();
  if (EscenaActual == CantidadDeEscenas){
    creditos();
  }
  if (EscenaActual > CantidadDeEscenas){
    EscenaActual = 0;
  }
}

function mousePressed() {
  let d = dist(mouseX, mouseY, 570, 420);
  if (!EsPregunta) {
    if (d < radioDelBoton) {
      Sonido.play();
      if (EscenaActual == 25){
        EscenaActual = 6;
      } else if (EscenaActual == 16 || EscenaActual == 24){
          EscenaActual = 30;
      } else {
          EscenaActual++;
      }
    }
  } else {
    //boton si
    if (mouseX > 560 && mouseX < 600 && mouseY > 380 && mouseY < 420) {
      Sonido.play();
      EsPregunta = false;
      if (EscenaActual == 5) {
        EscenaActual = 6;
      } else if (EscenaActual == 11) {
        EscenaActual = 12;
      } else if (EscenaActual == 20) {
        EscenaActual = 21;
      }
    }
    //boton no
    if (mouseX > 560 && mouseX < 600 && mouseY > 420 && mouseY < 460) {
      Sonido.play();
      EsPregunta = false;
      if (EscenaActual == 5) {
        EscenaActual = 17;
      } else if (EscenaActual == 11) {
        EscenaActual = 26;
      } else if (EscenaActual == 20) {
        EscenaActual = 25;        
      }
    }
  }
}
