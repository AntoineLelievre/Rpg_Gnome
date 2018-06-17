import { Objet } from "../js/objet.js";
//Un objet placé aléatoirement en quantités croissantes
export class Bombe extends Objet{
    constructor(src, width, height, posX, posY){
        super(src, width, height)
        this.posX = posX;
        this.posY =  posY;
    }
    explose(){
        console.log("coucou")
        this.image.src = "img/boum.png";
        this.posX -= this.width;
        this.posY -= this.height;
        this.width = 100;
        this.height = 100;
        
    }
}
