class Escudo{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.radio = 150;
    this.activo = false;
    this.cantidadDeUsos = 2;
    this.tiempoTotal = 180;
    this.framesActuales = 0;
    this.imgEscudo = imgEscudo;
  
  }
  
  dibujar(){
    if(this.activo){
      fill(0, 0, 255, 70);
      circle(this.posX, this.posY, this.radio);
      image(imgEscudo, this.posX - this.radio/2 - 5, this.posY - this.radio/2 - 5, this.radio + 10, this.radio + 10);
      
      this.framesActuales++;
      
      if (this.framesActuales >= this.tiempoTotal) {
        this.activo = false;
        this.framesActuales = 0;
      }
    }
  }
  
  activar(){
    if(!this.activo && this.cantidadDeUsos > 0){
      this.activo = true;
      this.cantidadDeUsos--;
      this.framesActivado = 0;
    }
  }
  
  proteger(bala){
    return (this.activo && dist(this.posX, this.posY, bala.posX + 20, bala.posY) < this.radio / 2);
  }
}
