//Trabajo Practico Final parte 2
//Comision 4
//Alumnos: Zuccato Manuel, Sutti Nicolas
//Docente: Leonardo Garay
//link del video: https://youtu.be/MCzrhoggToQ

let objJuego;

function preload(){
  //Cargar sonido
  soundFormats('mp3');
  sonidoDisparo = loadSound("data/sonidoDisparo.mp3");
  
  //Cargar Imagenes
  misil = loadImage("data/misil.png");
  balaTorreta = loadImage("data/balaTorreta.png");
  baseEnemiga = loadImage("data/baseEnemiga.png");
  imgFondo = loadImage("data/espacioFondo.png");
  nave = loadImage("data/nave.png");
  torretaImg = loadImage("data/torreta.png");
  imgPantallaInicial = loadImage("data/imgPantallaInicial.png");
  imgEscudo = loadImage("data/imgEscudo.png");
  imgGanaste = loadImage("data/imgGanaste.png");
  imgPerdiste = loadImage("data/imgPerdiste.png");
  
  //Cargar Fuente
  fuente = loadFont("data/SPACE.ttf")
}

function setup() { 
  createCanvas(640, 480);
  objJuego = new Juego();
  textFont(fuente);
  textAlign(CENTER);
}


function draw() {
  background(0);
  objJuego.dibujar();
  if (keyIsPressed){
    objJuego.teclaPresionada(keyCode);
  }
}

function mousePressed(){
  if (objJuego.botonInicio.mouseSobreBoton()){
    objJuego.estado = "jugando";
  } else if (objJuego.botonSiguiente.mouseSobreBoton()){
    objJuego.estado = "creditos";
  } else if (objJuego.botonReiniciar.mouseSobreBoton()){
    objJuego.estado = "inicio"
    objJuego.jugador.vida = 3;
    objJuego.baseEnemiga.vida = 100;
    objJuego.jugador.escudo.cantidadDeUsos = 2;
  } 
}
