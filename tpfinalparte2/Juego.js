class Juego{
  
  constructor(){
    this.cantidadTorretas = 10;
    this.torretas = [];
    this.crearJugador();
    this.crearTorretas();
    this.crearBaseEnemiga();
    this.botonInicio = new Boton(width/2 , height - 100 , 80, "Iniciar", 13)
    this.botonSiguiente = new Boton(width - 80, height - 80, 80, "Siguiente", 9)
    this.botonReiniciar = new Boton(80, height - 80, 80, "Reiniciar", 10)
    this.estado = "inicio";
    this.movimientoDeLosCreditos = 880;
    this.imgFondo = imgFondo;
    this.imgPantallaInicial = imgPantallaInicial;
    this.imgGanaste = imgGanaste;
    this.imgPerdiste = imgPerdiste;
  }
  
  dibujar(){
    if(this.estado === "inicio"){
      this.pantallaInicio();
      
    } else if (this.estado === "jugando"){
        if (this.jugador.vida > 0 && this.baseEnemiga.vida > 0 ) {
          image(this.imgFondo, 0, 0, width, height);
          
          for(let i = 0 ; i < this.cantidadTorretas; i++){
            this.torretas[i].dibujar();
            this.torretas[i].balaRandom();
          }
          
          this.jugador.dibujar();
          this.baseEnemiga.dibujar();        
          this.controlarDisparosAEnemigos();
          this.controlarDisparosAJugador();
          this.controlarDisparosAEscudo();
          
        fill(255);
        textSize(10);
        text('Vida Jugador: ' + this.jugador.vida, 75, 420);
        text('Vida Base Enemiga: ' + this.baseEnemiga.vida, 100, 440)
        text('Cantidad De Escudos: ' + this.jugador.escudo.cantidadDeUsos, 107, 460);
        
        } else if (this.jugador.vida <= 0 && this.baseEnemiga.vida > 0){
          this.jugadorPerdio();
        } else if (this.jugador.vida > 0 && this.baseEnemiga.vida <= 0){
          this.jugadorGano();
        }
    } else if (this.estado === "creditos"){
        fill(255);
        textSize(12);
        text("TP#Final — Video Juego Web [Etapa 2]", width/2, this.movimientoDeLosCreditos - 400);
        text("Alumnos:", width/2, this.movimientoDeLosCreditos - 360);
        text("Manuel Zuccato 121285/2", width/2, this.movimientoDeLosCreditos - 320);
        text("Nicolas Sutti 21387/3", width/2, this.movimientoDeLosCreditos - 280);
        text("Comision 4", width/2, this.movimientoDeLosCreditos - 240);
        text("Profesor:", width/2, this.movimientoDeLosCreditos - 200);
        text("Leonardo Garay", width/2, this.movimientoDeLosCreditos - 160);
        text("Imágenes hechas con IA", width/2, this.movimientoDeLosCreditos - 120);
        
        this.botonReiniciar.dibujar();
  
        this.movimientoDeLosCreditos -= 1;
        if (this.movimientoDeLosCreditos < -200) {
          this.movimientoDeLosCreditos = 880;
        }
        
    } 
  }
  
  pantallaInicio(){
    background(0,255,0);
    image(this.imgPantallaInicial, 0, 0, width, height);
    fill(220, 220, 0);
    textSize(13);
    text("instrucciones", 120, 30);
    fill(255);
    textSize(10);
    text("Mover a la Derecha (D)", 120, 60);
    text("Mover a la izquierda (A)", 120, 80);
    text("Disparar (ENTER)", 120, 100);
    text("Activar Escudo (ESPACIO)", 120, 120);
    this.botonInicio.dibujar();
  }
  
  crearTorretas(){
    for (let i = 0 ; i < this.cantidadTorretas; i++){
      this.torretas[i] = new Torreta(i * 60 + 45, 130);
    }
  }
  
  crearJugador(){
    this.jugador = new Jugador(width/2, height - 100);
  }
  
  crearBaseEnemiga(){
    this.baseEnemiga = new BaseEnemiga();
  }
  
  jugadorGano(){
    image(this.imgGanaste, 0, 0, width, height);
    this.botonSiguiente.dibujar();
    textSize(16);
    fill(255);
    text("¡Ganaste!, La base enemiga ha sido destruida", width/2, height/2);
  }
  
  jugadorPerdio(){
    image(this.imgPerdiste, 0, 0, width, height);
    this.botonSiguiente.dibujar();
    textSize(16);
    fill(255);
    text("Fin del juego, Tu nave ha sido destruida.", width/2, height/2);
  }
  
  teclaPresionada(keyCode){
    this.jugador.teclaPresionada(keyCode);
  }
  
  controlarDisparosAEnemigos(){
    if (this.jugador.balaDisparada()) {
      let bala = this.jugador.bala;
      if (!bala.impactada && this.baseEnemiga.balaRecibida(bala)) {
        this.baseEnemiga.restarVida();
        bala.impactada = true;
      }
    }
  }
  
  controlarDisparosAJugador() {
    for (let i = 0; i < this.torretas.length; i++) {
        let torreta = this.torretas[i];
        for (let j = 0; j < torreta.balas.length; j++) {
            let bala = torreta.balas[j];
            if (!bala.impactada && this.jugador.balaRecibida(bala)) {
                this.jugador.restarVida();
                bala.impactada = true;
            }
        }
    }
}

  controlarDisparosAEscudo() {
    for (let i = 0; i < this.torretas.length; i++) {
      let torreta = this.torretas[i];
      for (let j = 0; j < torreta.balas.length; j++) {
        let bala = torreta.balas[j];
        if (!bala.impactada && this.jugador.escudo.proteger(bala)) {
          bala.impactada = true;
        }
      }
    }
  }


}
