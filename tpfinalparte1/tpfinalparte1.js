//Trabajo Practico Final parte 1
//Comision 4
//Alumnos: Zuccato Manuel, Sutti Nicolas
//Docente: Leonardo Garay
//link del video: https://youtu.be/R0iOD7wz3Ko

let imagenes = []
let Sonidos = []
let dialogos;
let escenaActual = 0;
let CantidadDeImg = 31;
let CantidadDeSonido = 2;
let movimientoDeLosCreditos = 880;
let sonidoReproducido = false;

function preload(){
  for (let i = 0 ; i < CantidadDeImg ; i++){
    imagenes[i] = loadImage("data/img"+i+".jpg");
  }
  dialogos = loadStrings("data/dialogos.txt");
  soundFormats('mp3');
  for (let i = 0 ; i < CantidadDeSonido ; i++){
    Sonidos[i] = loadSound("data/sonido"+i+".mp3");
  }
}

function setup() {
  createCanvas(640, 480);
  textSize(16);
}


function draw() {
  background(0)
  cargarEscena();
}
