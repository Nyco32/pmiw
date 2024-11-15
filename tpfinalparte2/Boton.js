class Boton{
  constructor(posX, posY, diametro, txt, txtSize){
    this.posX = posX ;
    this.posY = posY ;
    this.diametro = diametro ;
    this.txt = txt
    this.txtSize = txtSize;
  }
  
  dibujar(){
    if(this.mouseSobreBoton()){
      fill(255,0, 0);
    } else{
      fill(255);
    }
    circle(this.posX, this.posY, this.diametro);
    textAlign(CENTER);
    textSize(this.txtSize);
    fill(0);
    text(this.txt, this.posX, this.posY + 7);
  }

  mouseSobreBoton(){
  return dist(mouseX, mouseY, this.posX, this.posY) < (this.diametro/2);
  }
}
