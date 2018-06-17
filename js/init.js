//import * as NomAChoisir from '/modules/mon-module.js';
import {Plateau} from "../js/plateau.js";
import {Mecanique} from "../js/mecanique.js";
import {Hero} from "../js/hero.js";
class Init{
    constructor(highScore){
        this.fonctionnement = new Mecanique(1, highScore);
    }
}

var monJeu = new Init(0);

if(monJeu.fonctionnement.monHero.autorisation){
    document.addEventListener('keydown', (event) => {
        let key_pressed; 
        key_pressed  = window.event ? event.keyCode : event.which;
        switch(key_pressed){
            case 83: 
            case 40: //down
                monJeu.fonctionnement.monHero.movedown = true;
                break
            case 90: 
            case 38: //up
                monJeu.fonctionnement.monHero.movetop = true;
                break
            case 81:
            case 37:// left 
                monJeu.fonctionnement.monHero.moveleft = true;
                break
            case 68:
            case 39:// right
                monJeu.fonctionnement.monHero.moveright = true;
                break
        } 
    })
    document.addEventListener('keyup', (event) => {
        let key_pressed; 
        key_pressed  = window.event ? event.keyCode : event.which;
        switch(key_pressed){
            case 83: 
            case 40: //down
                monJeu.fonctionnement.monHero.movedown = false;
                break
            case 90: 
            case 38: //up
                monJeu.fonctionnement.monHero.movetop = false;
                break
            case 81:
            case 37:// left 
                monJeu.fonctionnement.monHero.moveleft = false;
                break
            case 68:
            case 39:// right
                monJeu.fonctionnement.monHero.moveright = false;
                break
        } 
    })
}


function boucle(){
    if (monJeu.fonctionnement.monHero.autorisation){
        if(monJeu.fonctionnement.monHero.movedown){
            monJeu.fonctionnement.preparemove(0, 5)
        }
        if(monJeu.fonctionnement.monHero.movetop){
            monJeu.fonctionnement.preparemove(0,-5)
        }
        if(monJeu.fonctionnement.monHero.moveleft){
            monJeu.fonctionnement.preparemove(-5,0)
        }
        if(monJeu.fonctionnement.monHero.moveright){
            monJeu.fonctionnement.preparemove(5,0)
        }
    }
    else{
        //monJeu.reset();
        setTimeout(function(){
                monJeu.fonctionnement.monHero.autorisation = true;
                document.querySelector('body').removeChild(canvas);
                monJeu = new Init(monJeu.fonctionnement.board.highScore);
                boucle()
            },3000);
        return
    }
    requestAnimationFrame(boucle);
}
boucle()


