class Bala{
  constructor(posX, posY){
    this.posX = posX + 20;
    this.posY = posY;
    this.disparadaJugador = false;
    this.disparadaTorreta = false;
    this.impactada = false;
    this.misil = misil;
    this.balaTorreta = balaTorreta;
  }
  
  
  dibujar(){
    if (this.disparadaJugador && !this.impactada) {
      fill(255);
      image(this.misil, this.posX - 25, this.posY - 25, 10 , 50);
      this.moverBalaJugador();
    }
    if(this.disparadaTorreta && !this.impactada){
      fill(255);
      image(this.balaTorreta, this.posX - 5, this.posY - 5, 10 , 10);
      fill(0,0, 255, 20);
      //circle(this.posX, this.posY, 10)
      this.moverBalaTorreta();
    }
    
  }
  
  moverBalaJugador(){
    this.posY -= 5;
    if (this.posY < 0){ 
      this.impactada = true;
    }
  }
  
  moverBalaTorreta(){
    this.posY += 2;
    if (this.posY < 0){ 
      this.impactada = true;
    }
  }
  
  disparaJugador(){
    this.disparadaJugador = true;
  }
  
  disparaTorreta(){
    this.disparadaTorreta = true;
  }
}
