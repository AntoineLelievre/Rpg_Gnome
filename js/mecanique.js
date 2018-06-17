//La classe qui regroupe toute la mécanique du jeu, le calcul des collisions, les listes d'objets...
import {Plateau} from "../js/plateau.js";
import {Hero} from "../js/hero.js";
import {Monstre} from "../js/monstre.js";
import {Bombe} from "../js/bombe.js";
import {Objet} from "../js/objet.js";
export class Mecanique {
    constructor(nbpiege, highScore){
        this.monHero = new Hero ("img/hero.png", 25, 30, Math.random() * (window.innerHeight - 50) + 25, Math.random() * (window.innerHeight - 60) + 30, true, false, false, false, false,)
        this.monMonstre = new Monstre ("img/monster.png", 25, 30, Math.random() * (window.innerHeight - 25), Math.random() * (window.innerHeight - 30))//Math.random() * this.board.width, Math.random() * this.board.height);
        this.allBombes = [];
        for (let i = 0; i < nbpiege; i++){
            this.bombe = new Bombe('img/bomb.png', 25, 25, Math.random() * (window.innerHeight - 25) , Math.random() * (window.innerHeight - 25));
            this.allBombes.push(this.bombe);
        }
        this.board = new Plateau (window.innerHeight, window.innerHeight, highScore);
        this.items = [this.monMonstre, this.monHero];
        this.GameOver = new Object("img/GameOver.png", 200, 100);
        this.time = 6;
        this.preparemove(0, 0);
        this.timer();
    }
    preparemove(x, y){
        //condition de collisions si le hero est bien sur la grille
        if (this.monHero.posX + x > 0 && this.monHero.posY + y > 0 &&
            this.monHero.posX+this.monHero.width + x < this.board.width && 
            this.monHero.posY+this.monHero.height +y < this.board.height ){
            
            //efface le canvas et recreer tout les objets si les conditions de déplacement sont respectées
            this.monHero.move(x, y);
            this.board.Efface();
            for (let i = 0; i < this.allBombes.length; i++ ){
                this.board.Afficher(this.allBombes[i])
                if (this.monHero.posX < this.allBombes[i].posX + this.allBombes[i].width -5  && this.monHero.posX + this.monHero.width   > this.allBombes[i].posX +5 &&
                    this.monHero.posY < this.allBombes[i].posY + this.allBombes[i].height -5 && this.monHero.posY + this.monHero.height  > this.allBombes[i].posY +5){
                    this.allBombes[i].explose();
                    this.defaite()
                }
            }
            for (let i = 0; i < this.items.length; i++ ){
                this.board.Afficher(this.items[i])
            }
            //repositionne le monstre quand il est superposé au hero
            if (this.monHero.posX < this.monMonstre.posX + this.monMonstre.width   && this.monHero.posX + this.monHero.width   > this.monMonstre.posX &&
                this.monHero.posY < this.monMonstre.posY + this.monMonstre.height  && this.monHero.posY + this.monHero.height  > this.monMonstre.posY){
                    this.monMonstre.attrape()
                    this.allBombes.push(new Bombe('img/bomb.png', 25, 25, Math.random() * (window.innerHeight - 25) , Math.random() * (window.innerHeight - 25)));
                    this.board.scoreup();
                    this.time = 6
                }
        }
        else{
            return        
        }
    }
    defaite(){
        this.monHero.autorisation = false;
        document.querySelectorAll("article:nth-child(2) p")[1].innerText="Game Over. Une nouvelle partie vas se relancer";
        //this.board.Afficher(this.GameOver)
    }
    timer(){
        if(this.time>-1){
            this.board.interface(this.time);
            setTimeout(()=>{
                this.time--
                this.timer();
            },1000)
        }
        else{
            this.defaite();
        }
        
    }
}
