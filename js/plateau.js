//la classe qui dessine le plateau et permet l'affichage des différents objets du jeu : score, fond, timer, monstre, héros...
export class Plateau {
    constructor(width, height, highScore){
        this.width = width;
        this.height = height;
        this.score = 0;
        this.highScore = highScore;
        this.creer();  
        this.interface(10);
    }
    creer(){
        document.querySelector('body').insertAdjacentHTML('beforeEnd', "<canvas id='canvas'></canvas>");
        let can = document.querySelector("#canvas");
        can.width = this.width;
        can.height = this.height;
        this.ctx = can.getContext('2d');   
    }
    Afficher(object){
        if(object.image.complete){
            this.ctx.drawImage(object.image, object.posX, object.posY, object.width, object.height);
        }
        else{
            object.image.onload = () =>{
            this.ctx.drawImage(object.image, object.posX, object.posY, object.width, object.height);
            }
        }
    }
    Efface(){
        this.ctx.clearRect(-10, -10, this.width+10, this.height+10); /* On efface la zone de l'image */
    }
    interface(temps){
        document.querySelectorAll("p")[0].innerText="Votre score :"+this.score;    
        document.querySelectorAll("article:nth-child(2) p")[0].innerText="Temps restant :"+temps+"s"; 
        document.querySelectorAll("article:nth-child(2) p")[1].innerText=""; 
    }
    scoreup(){
        this.score ++
        document.querySelectorAll("p")[0].innerText="Votre score :"+this.score;
        if(this.highScore < this.score){
            this.highScore++
            document.querySelectorAll("p")[1].innerText="Votre meilleur score :"+this.score;
        }
    }
}



