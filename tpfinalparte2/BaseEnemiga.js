class BaseEnemiga{
  constructor(){
    this.posX = 20;
    this.posY = 0;
    this.miColor = color(255,255,0);
    this.vida = 100;
    this.baseEnemiga = baseEnemiga;
    this.ancho = 600;
    this.alto = 150;
  }

  dibujar(){
    if(this.vida > 0){
      fill(this.miColor);
      image(this.baseEnemiga, this.posX, this.posY - 50, this.ancho, this.alto)
  }
  }
  
  restarVida(){
    this.vida = this.vida - 5;
  }
  
  balaRecibida(bala) {
    if (
      bala.posX > this.posX && 
      bala.posX < this.posX + this.ancho && 
      bala.posY > this.posY && 
      bala.posY < this.posY + (this.alto/2)
    ) {
      this.restarVida();
      bala.impactada = true;
    }
  }
}
