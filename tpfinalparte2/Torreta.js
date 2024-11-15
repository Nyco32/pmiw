class Torreta{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255,0,0);
    this.balas = [];
    this.vida = 20;
    this.torretaImg = torretaImg;
    this.torretaAncho = 60;
    this.torretaAlto = 50;
  }
  dibujar(){
    let nuevasBalas = [];
    for(let i = 0; i < this.balas.length; i++){
        this.balas[i].dibujar();
        this.balas[i].moverBalaTorreta();

        if (!this.balas[i].impactada && this.balas[i].posY <= height) {
            nuevasBalas.push(this.balas[i]);
        }
    }
    this.balas = nuevasBalas;

    fill(this.miColor);
    image(this.torretaImg, this.posX - (this.torretaAncho/2), this.posY - (this.torretaAlto/2), this.torretaAncho, this.torretaAlto)
}
    
  dispararBala(){
    let nuevaBala = new Bala(this.posX - 20, this.posY);
    nuevaBala.disparaTorreta();
    this.balas.push(nuevaBala);
  }
  
  balaRandom(){
    if(random(0, 200) > 199){
      this.dispararBala();
    }
  }
  balaDisparada(){
    return this.bala.disparadaTorreta;
  }
}
