import { Objet } from "../js/objet.js";
//la classe du héros qui bouge et attrape des monstres
export class Hero extends Objet{
    constructor(src, width, height, posX, posY, autorisation,movedown, movetop, moveleft, moveright){
        super(src, width,height);
        this.posX = posX;
        this.posY =  posY;
        this.autorisation = autorisation;
        this.movedown = movedown;
        this.movetop = movetop;
        this.moveleft = moveleft;
        this.moveright = moveright;
    }
    move(x,y,maxX,maxY){
        //applique les déplacements
        this.posX+=x;
        this.posY+=y;
    }
}