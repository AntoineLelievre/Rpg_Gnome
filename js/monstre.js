import { Objet } from "../js/objet.js";
//Le monstre infernal à attraper
export class Monstre extends Objet{
    constructor(src, width, height, posX, posY){
        super(src, width, height);
        this.posX = posX;
        this.posY =  posY;
       
    }
    attrape(){
        this.posX = Math.random() * (window.innerHeight - 50) + 25;
        this.posY = Math.random() * (window.innerHeight - 60) + 30;
    }
}