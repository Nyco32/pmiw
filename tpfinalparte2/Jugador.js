class Jugador{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(0,255,0);
    this.vida = 3;
    this.bala = null;
    this.nave = nave;
    this.naveAncho = 90;
    this.naveAlto = 110;
    this.sonidoDisparo = sonidoDisparo;
    this.crearEscudo();
  }
  dibujar(){
    if (this.bala && this.bala.disparadaJugador && !this.bala.impactada) {
        this.bala.dibujar();
    }
    
    fill(this.miColor);
    image(this.nave, this.posX - (this.naveAncho/2), this.posY - (this.naveAlto/2), this.naveAncho, this.naveAlto);
    fill(0,0, 255, 20);
    //circle(this.posX, this.posY, 110)
    
    this.escudo.posX = this.posX;
    this.escudo.posY = this.posY;
    this.escudo.dibujar();
  }
  moverDerecha(){
    if(this.posX < 570){
      this.posX += 3;
    }
  }
  moverIzquierda(){
    if(this.posX > 60){
      this.posX -= 3;
    }
  }
  
  teclaPresionada(keyCode){
    if(keyCode === 65){
      this.moverIzquierda();
    }else if(keyCode === 68){
      this.moverDerecha();
    }else if (keyCode === ENTER) {
      this.dispararBala();
    }else if (keyCode === 32){
      this.activarEscudo();
    }
  }
  
  dispararBala(){
    if (!this.bala || !this.bala.disparadaJugador || this.bala.impactada) {
      this.bala = new Bala(this.posX, this.posY);
      this.bala.disparaJugador();
      if (!this.sonidoDisparo.isPlaying()) {
        this.sonidoDisparo.play();
      }
    }
  }
  
  balaDisparada(){
    if(this.bala){
    return this.bala.disparadaJugador;
    }
  }
  
  restarVida(){
    this.vida = this.vida - 1;
  }
  
  balaRecibida(bala){
    return (dist(this.posX, this.posY, bala.posX, bala.posY) < 50);
  }
  
  crearEscudo(){
    this.escudo = new Escudo(this.posX, this.posY)
  }
  activarEscudo(){
    this.escudo.activar()
  }
}
